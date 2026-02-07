import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('E-commerce API')
    .setDescription('Esta API é um serviço de e-commerce')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

console.log('\x1b[36m%s\x1b[0m', '  ███████╗ ██████╗ ███████╗ ██████╗');
console.log('\x1b[36m%s\x1b[0m', '  ██╔════╝██╔════╝ ██╔════╝██╔════╝');
console.log('\x1b[36m%s\x1b[0m', '  ███████╗██║  ███╗█████╗  ██║     ');
console.log('\x1b[36m%s\x1b[0m', '  ╚════██║██║   ██║██╔══╝  ██║     ');
console.log('\x1b[36m%s\x1b[0m', '  ███████║╚██████╔╝███████╗╚██████╗');
console.log('\x1b[36m%s\x1b[0m', '  ╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝');
console.log('\x1b[36m%s\x1b[0m', '      Sistema de Gestão E-commerce');
console.log('');

bootstrap().catch((error) => {
  console.error('❌ Ocorreu um erro ao iniciar a aplicação:', error);
});
