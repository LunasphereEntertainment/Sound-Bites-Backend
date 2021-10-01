import {
  Controller,
  Get,
  Param,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { createReadStream } from 'fs';

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
}
