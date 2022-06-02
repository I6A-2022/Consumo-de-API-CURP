import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  fecha: string = "";
  curp: string = "";



  constructor(private http:HttpClient) {

  }

  ngOnInit() {

    console.log("NG ON INIT")

    const apiURL ='http://localhost:1337/api/curps/1' ;

    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data)
      this.nombre = data.data.attributes.nombre
      this.apellidoPaterno = data.data.attributes.apellidopaterno
      this.apellidoMaterno = data.data.attributes.apellidomaterno
      this.fecha = data.data.attributes.fecha
      this.curp = data.data.attributes.curp

    });
  }

}


