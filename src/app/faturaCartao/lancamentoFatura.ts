import { SubCategoria } from '../subCategoria/subCategoria'
import { FaturaCartao } from './faturaCartao'

export class LancamentoFatura {

  constructor () {
    this.faturaCartao = new FaturaCartao()
    this.subCategoria = new SubCategoria()
  }
  
    id: number
    faturaCartao: FaturaCartao
    subCategoria: SubCategoria
    data: string
    parcela: number
    valor: number
    descricao: string
    tipo: string
  }