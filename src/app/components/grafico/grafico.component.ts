import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @Input() public doughnutChartLabels:string[];
  @Input() public doughnutChartData:number[];
  @Input() public doughnutChartType:string;

  constructor() { }

  ngOnInit() {
  }

}
