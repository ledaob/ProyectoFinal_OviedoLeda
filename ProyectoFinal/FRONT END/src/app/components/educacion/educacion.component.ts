import { Component, OnInit } from '@angular/core';
import { FormacionAcademicaService } from 'src/app/service/formacion-academica.service';
import { TokenService } from 'src/app/service/token.service';
import { FormacionAcademica } from 'src/app/model/formacion-academica';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  formacionAcademica: FormacionAcademica[] = [];

  constructor(private formacionAcademicaS: FormacionAcademicaService, private tokenService: TokenService){}
  isLogged  =false;


  ngOnInit(): void {
    this.cargarFormacionAcademica();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarFormacionAcademica(): void{
    this.formacionAcademicaS.lista().subscribe(
      data =>{
        this.formacionAcademica = data;
      }
    )
  }

  borrar(id?: number){
    if(id != undefined){
      this.formacionAcademicaS.delete(id).subscribe(
        data =>{
          this.cargarFormacionAcademica();
        }, err =>{
          alert("Error al eliminar.")
        }
      )
    }
  }

}
