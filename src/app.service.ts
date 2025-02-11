import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    try {
      if (this.dataSource.isInitialized) {
        console.log('✅ Successfully connected to the RDS MySQL database!');
      }
    } catch (error) {
      console.error('❌ Failed to connect to the RDS MySQL database:', error);
    }
  }
}
