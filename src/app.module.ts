import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
// import { DatabaseService } from '../src/database.service'; // Ensure this file exists

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'test-db.ctcmqkco6h9r.ap-south-1.rds.amazonaws.com', // e.g., database-1.abcdefg.us-east-1.rds.amazonaws.com
      port: 3306,
      username: 'admin',
      password: 'Agile#1357',
      database: 'your-database',
      entities: [User], // Add your entities here
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User]), // Register the entity if needed
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
