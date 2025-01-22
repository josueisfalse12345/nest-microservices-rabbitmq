import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /**
   * Valida que el numero sea par
   * @param numberRevision
   * @returns 
   */
  isPair(numberRevision: number) {
    return numberRevision % 2 === 0;
  }

  /**
   * Valida si un numero es primo
   * @param numberRevision 
   * @returns 
   */
  isPrime(numberRevision: number) {
    for (let i = 2, s = Math.sqrt(numberRevision); i <= s; i++) {
      if (numberRevision % i === 0) return false;
    }
    return numberRevision > 1;
  }

  /**
   * Obtiene la factorial de un numero
   * @param numberRevision 
   * @returns 
   */
  factorial(numberRevision: number) {
    if (numberRevision === 0 || numberRevision === 1) {
      return 1;
    }
    return numberRevision * this.factorial(numberRevision - 1);
  }

  /**
   * Obtiene un lista de toda la secuencia de fibonacci encontrado en el numero
   * @param numberRevision 
   * @returns 
   */
  fibonacciSequence(numberRevision: number) : number[] {
    const sequence = [];
    if (numberRevision <= 0)
      return sequence;
    sequence.push(0);

    if (numberRevision === 1) return sequence;
    sequence.push(1);

    for (let i = 2; i < numberRevision; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  /**
   * Busca los factores de un numero
   * @param num 
   * @returns 
   */
  findFactors(num: number): number[] {
    const factors: number[] = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (i !== num / i) {
          factors.push(num / i);
        }
      }
    }

    return factors.sort((a, b) => a - b);
  }

  /**
   * Suma de todos los numeros
   * @param n 
   * @returns 
   */
  sumOfNumbers(n: number): number {
    return (n * (n + 1)) / 2;
  }
}
