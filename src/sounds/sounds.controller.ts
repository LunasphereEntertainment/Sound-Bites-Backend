import { Controller, Get, Param } from '@nestjs/common';
import { SoundsService } from './sounds.service';

@Controller('/sounds')
export class SoundsController {
  constructor(private readonly service: SoundsService) {}

  @Get('/list')
  async getRecentSounds() {
    return await this.service.findRecent();
  }

  @Get('/:id')
  async playSound(@Param('id') soundId: number) {
    return await this.service.findSound(soundId);
  }
}
