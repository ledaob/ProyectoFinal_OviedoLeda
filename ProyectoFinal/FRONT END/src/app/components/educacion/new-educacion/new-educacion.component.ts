import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/service/formacion-academica.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreFA: string;
  descripcionFA: string;

  constructor(private formacionAcademicaS: FormacionAcademicaService, private router: Router){ }

  ngOnInit(): void {
    
  }

  onCreate():void {
    const formacionAcademica = new FormacionAcademica(this.nombreFA, this.descripcionFA);
    this.formacionAcademicaS.save(formacionAcademica).subscribe(
      data =>{
        alert("Formacion académica añadida con éxito");
        this.router.navigate(['']);
      }, err =>{
        alert ("Falló");
        this.router.navigate(['']);
      }
    )
  } 

}
