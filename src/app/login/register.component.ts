import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins():any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formularioLogin:FormGroup;

  constructor(public usuarioService:UsuarioService, public roter:Router) { }

  sonIguales(campo1:string,campo2:string){
    return (group:FormGroup)=>{

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1===pass2){
        return null;
      }
      //error
      return {
        sonIguales:true
      }
    }
  }

  ngOnInit() {
    init_plugins();

    this.formularioLogin = new FormGroup({
      nombre:new FormControl(null,Validators.required),
      correo:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null, Validators.required),
      password2:new FormControl(null, Validators.required),
      condiciones:new FormControl(false)
    }, { validators: this.sonIguales('password','password2')} );
  }

  registrarUsuario(){

    if(this.formularioLogin.invalid){
      return;
    }

    if(!this.formularioLogin.value.condiciones){
      swal('Importante','Debe de acpetar las condiciones','warning');
      return;
    }

    let usuario = new Usuario(
      this.formularioLogin.value.nombre,
      this.formularioLogin.value.correo,
      this.formularioLogin.value.password
    )

    this.usuarioService.crearUsuario(usuario)
    .subscribe(resp=>{
      console.log(resp);
      this.roter.navigate(['/login']);
    })
  }
}
