import { Component, OnInit } from '@angular/core';
import { Router,ActivationEnd } from '@angular/router';
import { Title,Meta,MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html'
})
export class BreadcrumsComponent implements OnInit {

  label:string='';

  constructor( 
    private router:Router, 
    public title:Title,
    public meta:Meta  ) { 

    this.getDataRoute().subscribe(data=>{
      this.label=data.titulo;
      this.title.setTitle(this.label);

      let metaTag:MetaDefinition ={
        name:'description',
        content:this.label
      };
      this.meta.updateTag(metaTag);

    });

  }

  getDataRoute(){
    return this.router.events
    .filter(evento=> evento instanceof ActivationEnd)
    .filter((evento:ActivationEnd)=>evento.snapshot.firstChild===null)
    .map((data:ActivationEnd)=>data.snapshot.data)
  }

  ngOnInit() {
  }

}
