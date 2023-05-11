import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormacionAcademica } from '../model/formacion-academica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {
  URL = 'http://localhost:8080/formacionacademica/';



  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<FormacionAcademica[]>{
    return this.httpClient.get<FormacionAcademica[]>(this.URL + 'lista');    
  }

  public details(id: number): Observable<FormacionAcademica>{
    return this.httpClient.get<FormacionAcademica>(this.URL + `detail/${id}`);
  }

  public save(formacionAcademica: FormacionAcademica): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', formacionAcademica);

  }

  public update(id: number, formacionAcademica: FormacionAcademica): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, formacionAcademica);

  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}