import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
// import { DatabaseService } from '../src/database.service'; // Ensure this file exists

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes env available everywhere
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, // e.g., database-1.abcdefg.us-east-1.rds.amazonaws.com
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User], // Add your entities here
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User]), // Register the entity if needed
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
