import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Artista } from 'app/modelo/data';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private http:HttpClient) { }
  getArtista(){
    console.log("hola ")
    return this.http.get<Artista[]>(environment.urlget);
  }

  consultasemestre(artista:Artista){
    return this.http.get<Artista[]>(environment.urldelete+artista.idArtista)
  }
  createArtista(artista:Artista){
    return this.http.post<Artista>(environment.url,artista); 
    //return this.http.post<Semestre>(environment.url);
  
  }
}
 