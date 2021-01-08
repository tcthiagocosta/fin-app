import { Conta } from '../conta/conta'
import { FaturaCartao } from '../faturaCartao/faturaCartao'
import { SubCategoria } from '../subCategoria/subCategoria'

export class Lancamento {

  constructor () {
    this.subCategoria = new SubCategoria()
    this.faturaCartao = new FaturaCartao()
    this.conta = new Conta()
  }
  
    id: number
    conta: Conta
    faturaCartao: FaturaCartao
    subCategoria: SubCategoria
    descricao: string
    tipo: string
    valor: number
    data: string
    dataPagamento: string
    pago: boolean
  }