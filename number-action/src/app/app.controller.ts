import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private appService: AppService
  ){}

  @EventPattern('process_number')
  async handleNumberProcessing(@Payload() data: any) :Promise<Object>{
    const numberRecive = parseInt(data, 10);
    if(isNaN(numberRecive))
      return { error: "Debe ser un numero"};

    return {
      isPair: this.appService.isPair(numberRecive),
      isPrime: this.appService.isPrime(numberRecive),
      factorial: this.appService.factorial(numberRecive),
      sumN: this.appService.sumOfNumbers(numberRecive),
      factors: this.appService.findFactors(numberRecive),
      fibonacci: this.appService.fibonacciSequence(numberRecive),
    }
  }
}
