import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/service/formacion-academica.service';

@Component({
  selector: 'app-edit-formacion-academica',
  templateUrl: './edit-formacion-academica.component.html',
  styleUrls: ['./edit-formacion-academica.component.css']
})
export class EditFormacionAcademicaComponent implements OnInit{
  formacionAcademica: FormacionAcademica = null;

  constructor(private formacionacademicaS: FormacionAcademicaService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.formacionacademicaS.details(id).subscribe(
      data =>{
        this.formacionAcademica = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.formacionacademicaS.update(id, this.formacionAcademica).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
