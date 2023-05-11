import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ServExperienciaLaboralService } from 'src/app/service/serv-experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: ExperienciaLaboral[]= [];

  constructor(private sExperienciaService: ServExperienciaLaboralService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperienciaService.lista().subscribe(data =>{this.experiencia = data;})
  }
  borrar(id?: number){
    if(id != undefined){
      this.sExperienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();        
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
      )
    }
  }

}


