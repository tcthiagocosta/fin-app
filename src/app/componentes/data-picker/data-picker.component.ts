import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {
  @Input() data: string;
  @Input() placeholder: string;
  @Output() dataAlterada = new EventEmitter()
  @Input() desabilita: boolean
  
  mode: CalendarModule

  config = {
    firstDayOfWeek: 'su',
    monthFormat: 'MMM, YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    closeOnSelect: true,
    closeOnEnter: true,
    weekDayFormat: 'ddd',
    appendTo: document.body,
    drops: 'down',
    opens: 'right',
    showNearMonthDays: true,
    showWeekNumbers: false,
    enableMonthSelector: true,
    format: "DD/MM/YYYY",
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'DD',
    locale: 'pt-br'
  };

  constructor() { 
    this.mode = 'daytime'
  }

  ngOnInit(): void {
  }

  alterarValor() {
    this.dataAlterada.emit({novaData: this.data})
  }

}
