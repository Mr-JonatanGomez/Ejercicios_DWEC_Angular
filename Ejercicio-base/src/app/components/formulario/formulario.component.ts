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
  rol=""
  mostrar= false
  seleccion=""
  usuariosLista: Usuario[]=[]

  mensaje=""



  guardarDatos(){
    /* console.log(nombre);
    console.log(edad);
    this.nombre=nombre
    this.edad=edad */
    //todo, AL hacerlo por ngModel, no necesitamos parametros, creo el model Usuarios
    let usuario: Usuario={
      nombre:this.nombre,
      edad:parseInt(this.edad),
      rol:this.rol
    }


    if (this.nombre.length>0 && this.edad.length>0 && parseInt(this.edad) >=18) {
     this.usuariosLista.push(usuario)
    }else if(this.nombre.length>0 && this.edad.length>0 && parseInt(this.edad) <18){
      Swal.fire({
        icon: "error",
        text:"No puedes guardar usuarios menores de edad"
      })
      this.vaciarInputs()


    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tienes que introducir los datos",
        
      });
    }
    this.vaciarInputs()
  }
  vaciarInputs(){
    this.nombre=""
    this.edad=""
  }
  mostrarListado(){
    this.mostrar= !this.mostrar
  }
}
