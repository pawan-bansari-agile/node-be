// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { DataSource } from 'typeorm';

// @Injectable()
// export class DatabaseService implements OnModuleInit {
//   constructor(private dataSource: DataSource) {}

//   async onModuleInit() {
//     try {
//       await this.dataSource.initialize();
//       console.log('✅ Successfully connected to the RDS MySQL database!');
//     } catch (error) {
//       console.error('❌ Failed to connect to the RDS MySQL database:', error);
//     }
//   }
// }
