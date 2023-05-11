import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ServExperienciaLaboralService } from 'src/app/service/serv-experiencia-laboral.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreExp: string = '';
  descripcionExp: string = '';


  constructor(private sExperiencia: ServExperienciaLaboralService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const experiencia = new ExperienciaLaboral(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(experiencia).subscribe(
      data=>{
      alert("Se añadió la experiencia");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló.");
      this.router.navigate(['']);
    }
    )
  }

}
