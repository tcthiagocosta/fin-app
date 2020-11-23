import { Categoria } from '../categoria/categoria'

export class SubCategoria {

  constructor () {
    this.categoria = new Categoria
  }
  
    id: number
    nome: string
    descricao: string
    categoria: Categoria
  }