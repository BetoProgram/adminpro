import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {

    token:string;
    usuario:Usuario;

    constructor(public http:HttpClient, public route:Router) { 

        this.cargarDatos();
    }

    cargarDatos(){
        if(localStorage.getItem('token')){
            this.token = localStorage.getItem('token');
            this.usuario = JSON.parse(localStorage.getItem('usuario'));
        }else{
            this.token = '';
            this.usuario=null;
        }
    }

    logout(){
        this.usuario= null;
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.route.navigate(['/login']);
    }

    estaLogeado(){
        return (this.token.length > 5)?true:false;
    }

    crearUsuario(usuario:Usuario){
        let url= URL_SERVICIOS + '/usuario';

        return this.http.post(url,usuario)
        .map((res:any)=>{
            swal('Usuario creado',usuario.email,'success');
            return res.usuario;
        });
    }

    login(usuario:Usuario,recuerdame:boolean){

        if(recuerdame){
            localStorage.setItem('email',usuario.email);
        }else{
            localStorage.removeItem('email');
        }

        let url = URL_SERVICIOS + '/login';
        return this.http.post(url,usuario).map((res:any)=>{
            this.token = res.token;
            localStorage.setItem('id',res.id);
            localStorage.setItem('token',res.token);
            localStorage.setItem('usuario',JSON.stringify(res.usuario));

            return true;
        });
    }

}