import { Cartao } from '../cartao/cartao'
import { SubCategoria } from '../subCategoria/subCategoria'

export class LancamentoFaturaDTO {

    constructor () {      
      this.subCategoria = new SubCategoria()
      this.cartao = new Cartao()
    }
    
      id: number      
      subCategoria: SubCategoria
      cartao: Cartao
      data: string
      parcela: number
      valor: number
      descricao: string
      
}
