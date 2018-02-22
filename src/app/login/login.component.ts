import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
declare function init_plugins():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  constructor(public route:Router, public usuarioService:UsuarioService) { }

  ngOnInit() {
    init_plugins();
    
    this.email= localStorage.getItem('email') || '';
    if(this.email.length > 1){
    }
  }

  ingresar(form:NgForm){
    // this.route.navigate(['dashboard']);
    if(form.invalid){
      return;
    }

    let usuario = new Usuario(null,form.value.email,form.value.password);
    this.usuarioService.login(usuario,form.value.recuerdame)
    .subscribe(res=>{
      this.route.navigate(['/dashboard']);
    })


    // console.log(form.valid,form.value);
  }
}
