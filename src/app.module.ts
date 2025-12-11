import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Treino } from './treino/entities/treino.entity';
import { TreinoModule } from './treino/treino.module';
import { Meta } from './meta/entities/meta.entitys';
import { MetaModule } from './meta/meta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Treino, Meta],
      synchronize: true,
    }),
    TreinoModule,
    MetaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
