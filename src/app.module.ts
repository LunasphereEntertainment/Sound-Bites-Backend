import * as config from '../config.json';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { Sound } from './sounds/sound.entity';
import { SoundsModule } from './sounds/sounds.module';
import { CollectionModule } from './collection/collection.module';
import { Collection } from './collection/collection.entity';
import { Tag } from './tags/tags.entity';
import { TagsModule } from './tags/tags.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          entities: [Sound, Collection, Tag],
          synchronize: !!process.env.DEV, //TODO: update to false for prod
        });
      },
    }),
    MulterModule,
    SoundsModule,
    CollectionModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
