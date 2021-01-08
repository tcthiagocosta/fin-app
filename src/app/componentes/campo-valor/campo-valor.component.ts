import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campo-valor',
  templateUrl: './campo-valor.component.html',
  styleUrls: ['./campo-valor.component.css']
})
export class CampoValorComponent implements OnInit {

  @Input() valor: number;
  @Output() valorAlterado = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  alterarValor() {
    this.valorAlterado.emit({novoValor: this.valor})
  }

}
