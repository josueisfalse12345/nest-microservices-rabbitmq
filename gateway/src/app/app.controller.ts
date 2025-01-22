import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NUMBER_ACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get('process-number')
  async processNumber(@Query('number') number: string) {
    const numericValue = parseInt(number, 10);
    const result = await this.client.send<string>('process_number', numericValue).toPromise();
    console.log(result);
    return result;
  }
}
