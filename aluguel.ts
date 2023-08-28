import { Bicicleta } from './bicicleta'
import { Cliente } from './cliente'

export class Aluguel {
    constructor(
      public num: number, 
      public cliente: Cliente, 
      public bicicleta: Bicicleta, 
      public dataAluguel: Date
    ) {}
}
