import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('process_number')
  handleNumberProcessing(@Payload() data: number) {
    console.log(`Processing number: ${data}`);
  }
}
