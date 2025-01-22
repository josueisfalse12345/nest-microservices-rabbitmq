import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NUMBER_ACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get('process-number')
  processNumber(@Query('number') number: string) {
    const numericValue = parseInt(number, 10);
    this.client.emit<number>('process_number', numericValue);
    return `Number ${numericValue} sent for processing.`;
  }
}
