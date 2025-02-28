import { Component } from '@angular/core';
import { Usuario } from '../../model/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nombre=""
  edad=""
  usuariosLista: Usuario[]=[]



  guardarDatos(){
    /* console.log(nombre);
    console.log(edad);
    this.nombre=nombre
    this.edad=edad */
    //todo, AL hacerlo por ngModel, no necesitamos parametros, creo el model Usuarios
    let usuario: Usuario={
      nombre:this.nombre,
      edad:this.edad
    }

    if (this.nombre.length>0 && this.edad.length>0) {
     this.usuariosLista.push(usuario)
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    this.vaciarInputs()
  }
  vaciarInputs(){
    this.nombre=""
    this.edad=""
  }
}
