import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienciaLaboral } from '../model/experiencia-laboral';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServExperienciaLaboralService {
  expURL = 'http://localhost:8080/experiencialaboral/'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.expURL + 'lista');

  }

  public detail(id: number): Observable<ExperienciaLaboral>{
      return this.httpClient.get<ExperienciaLaboral>(this.expURL + `detail/${id}`)
  }

  public save(experiencia: ExperienciaLaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);

  }
  public  update(id: number, experiencia: ExperienciaLaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);

  }



}
