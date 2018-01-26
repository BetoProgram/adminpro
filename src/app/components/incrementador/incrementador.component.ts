import { Component, OnInit, Input,EventEmitter, Output,ViewChild,ElementRef  } from '@angular/core';
import {  } from '@angular/core/src/event_emitter';
import { DOCUMENT } from '@angular/common/src/dom_tokens';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('#txtProgress') txtProgress:ElementRef
  @Input('progreso') porcentaje:number = 50;
  @Input() titulo:string = "Titulo";
  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangues(newValue:number){
    // let elemHTML:any = document.getElementsByName('progreso')[0];

    if(newValue>=100){
      this.porcentaje =100;
    }else if(newValue<=0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(num:number){

    if(this.porcentaje <= 0){
      this.porcentaje = 5;
      return;
    }else if(this.porcentaje>=100){
      this.porcentaje = 50;
      return;
    }

    this.porcentaje = this.porcentaje + num;
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }


}
