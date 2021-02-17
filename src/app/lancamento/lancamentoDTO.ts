import { Categoria } from '../categoria/categoria'
import { Conta } from '../conta/conta'
import { FaturaCartao } from '../faturaCartao/faturaCartao'
import { SubCategoria } from '../subCategoria/subCategoria'


export class LancamentoDTO {

    constructor () {
        this.categoria = new Categoria()
        this.subCategoria = new SubCategoria()
        this.faturaCartao = new FaturaCartao()
        this.conta = new Conta()
    }

    id: number
    conta: Conta
    categoria: Categoria
    subCategoria: SubCategoria
    faturaCartao: FaturaCartao
    descricao: string
    tipo: string
    valor: number
    data: string
    pago: boolean
    dataPagamento: string

}