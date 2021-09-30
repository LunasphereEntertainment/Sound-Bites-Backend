import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sound } from './sound.entity';
import { SoundsService } from './sounds.service';
import { SoundsController } from './sounds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sound])],
  providers: [SoundsService],
  controllers: [SoundsController],
})
export class SoundsModule {}
