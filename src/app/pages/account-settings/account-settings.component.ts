import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
    
    private serttingService:SettingsService
     ) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(link:any, color:string){
    this.applicarCheck(link);
    this.serttingService.aplicarTema(color);
  }

  applicarCheck(link:any){
    let tema = this.serttingService.ajustes.tema;
    let selectores:any = document.getElementsByClassName('selector');

    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this.serttingService.ajustes.tema;
    for(let ref of selectores){
      if(ref.getAttribute('data-theme')){
        ref.classList.add('working');
        break;
      }
    }
  }
}
