import { Cartao } from '../cartao/cartao'

export class FaturaCartao {

  constructor () {
    this.cartao = new Cartao
  }
  
    id: number
    cartao: Cartao
    mes: number
    ano: number
    pago: boolean
    descricao: string
    dataPagamento: string
  }