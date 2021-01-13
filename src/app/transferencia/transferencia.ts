import { Conta } from '../conta/conta'

export class Transferencia {

  constructor () {
    this.conta = new Conta()
    this.contaDestino = new Conta()
  }
  
    id: number
    descricao: string
    conta: Conta
    contaDestino: Conta
    valor: number
    data: string
  }