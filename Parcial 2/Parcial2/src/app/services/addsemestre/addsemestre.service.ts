import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Artista } from 'app/modelo/data';


@Injectable({
  providedIn: 'root'
})
export class AddsemestreService {

  constructor(private http:HttpClient) { }
  getSemestre(){

    return this.http.get<Artista[]>(environment.urlget);
  }

  deletesemestre(semestre:Artista){
    return this.http.delete<Artista>(environment.urldelete+"/"+semestre.idArtista)
  }
  createSemestre(semestre:Artista){
    return this.http.post<Artista>(environment.url,semestre); 
    //return this.http.post<Semestre>(environment.url);
  
  }
}
 