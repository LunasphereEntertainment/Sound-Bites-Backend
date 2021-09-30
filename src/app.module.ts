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

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          entities: [Sound, Collection],
          synchronize: true, //TODO: update to false for prod
        });
      },
    }),
    SoundsModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
