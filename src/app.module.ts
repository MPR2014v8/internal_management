import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@imssystem.5i4vezf.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority&appName=IMSSYSTEM`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
