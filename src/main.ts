import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';
import { AppExceptionFilter } from './filters/global-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AppExceptionFilter());
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Enable console logging for development
  if (process.env.NODE_ENV !== 'production') {
    app.useLogger(console);
  }

  app.use(
    cors({
      origin: '*',
    }),
  );

  // ✅ Serve static files from "uploads" folder
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/profile-pictures',
  });

  const config = new DocumentBuilder()
    .setTitle('Platform Integration Backend API')
    .setDescription(
      'Backend service documentation for the RTB Platform Integration',
    )
    .setVersion('1.0')
    .addTag('Platform Integration')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT).then(() => {
    console.log(` Server listening at: http://localhost:${process.env.PORT}`);
    console.log(`Swagger API: http://localhost:${process.env.PORT}/api`);
    console.log(`Uploaded files served at: http://localhost:${process.env.PORT}/uploads`);
  });

  // insert the roles in the database at the application starting
}
bootstrap();
