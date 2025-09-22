import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersModule } from './modules/users/users.module';
import { VendorsModule } from './vendors/vendors.module';
import { AdminModule } from './admin/admin.module';
import { AdminModule } from './src/admin/admin.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, AdminModule, VendorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
