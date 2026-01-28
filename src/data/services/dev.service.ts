import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Usuario } from '../../usuario/entities/usuario.entity';
import { Treino } from '../../treino/entities/treino.entity';
import { Meta } from '../../meta/entities/meta.entitys';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'db_appfitness',
      entities: [Treino, Meta, Usuario],
      synchronize: true,
    };
  }
}
