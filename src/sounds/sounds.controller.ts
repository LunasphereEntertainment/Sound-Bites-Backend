import {
  Controller,
  Get,
  Param,
  StreamableFile,
  Response,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import { FileInterceptor } from '@nestjs/platform-express';
import { Tag } from '../tags/tags.entity';
import { createHash } from 'crypto';

@Controller('/sounds')
export class SoundsController {
  constructor(private readonly service: SoundsService) {}

  @Get('/list')
  async getRecentSounds() {
    return await this.service.findRecent();
  }

  @Get('/:id')
  async getSoundInfo(@Param('id') soundId: number) {
    return await this.service.findSound(soundId);
  }

  @Get('/play/:id')
  async playSound(
    @Response({ passthrough: true }) res,
    @Param('id') soundId: number,
  ): Promise<StreamableFile> {
    const song = await this.service.findSound(soundId);
    await this.service.updatePlayCount(soundId, song.plays + 1);

    res.set({
      'Content-Type': 'audio/mpeg',
    });

    return new StreamableFile(createReadStream(song.path));
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('audio'))
  async uploadSound(
    @UploadedFile('file') file: Express.Multer.File,
    @Body('quote') quote: string,
    @Body('tags') tags: Tag[],
  ) {
    const hash = createHash('sha1');
    hash.update(file.filename);
    hash.digest().toString('base64');

    const path = `/sounds/${hash}.mp3`,
      sound = this.service.createSound(quote, tags, path);

    await writeFile(path, file.buffer);
  }

  @Patch('/:id')
  async updateMeta(
    @Param('id') soundId: number,
    @Body('quote') quote: string,
    @Body('tags') tags: Tag[],
  ) {
    await this.service.updateMeta(soundId, quote, tags);
  }

  @Delete('/:id')
  async deleteSound(@Param('id') soundId: number) {
    await this.service.deleteSound(soundId, 0);
  }
}
