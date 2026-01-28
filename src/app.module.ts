import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Treino } from './treino/entities/treino.entity';
import { TreinoModule } from './treino/treino.module';
import { Meta } from './meta/entities/meta.entitys';
import { MetaModule } from './meta/meta.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    TreinoModule,
    MetaModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
