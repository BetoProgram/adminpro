import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable,Subscription  } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit,OnDestroy {

  subcripcion:Subscription;

  constructor() { 
   
    this.subcripcion = this.regresaObservable()
    .subscribe(
      data=>console.log('Subs',data),
      error=>console.log('Error en el obs',error),
      ()=>console.log('Termino el observador')
    )
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subcripcion.unsubscribe();
  }

  regresaObservable():Observable<any>{
    return new Observable(observer=>{

      let contador = 0;

      let intervalo = setInterval(()=>{

        contador+=1;

        let salida = {
          valor:contador
        }

        //Funcion que emite el observable en este caso es un numero
        observer.next(salida);

        // if(contador===5){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador===3){
        //   observer.error('Error en servidor!');
        // }
          
      },1000);
    }).retry(2).map((resp:any)=>{
      return resp.valor
    })
    .filter((valor,index)=>{
      if(valor%2===1){
        //impar
        return true;
      }else{
        return false;
      }
    });
  }
}
