import { Component, EventEmitter, Input, OnInit, Output, Injectable } from '@angular/core';


@Component({
  selector: 'app-campo-data',
  templateUrl: './campo-data.component.html',
  styleUrls: ['./campo-data.component.css']
})
export class CampoDataComponent implements OnInit {

  pt: any;
  @Input() data: string;
  @Output() dataAlterada = new EventEmitter()
  @Input() desabilita: boolean

  constructor() { }

  alterarValor() {
    this.dataAlterada.emit({novaData: this.data})
  }


  ngOnInit(): void {

    this.pt = {
      firstDayOfWeek: 1,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
  }
  }

}
