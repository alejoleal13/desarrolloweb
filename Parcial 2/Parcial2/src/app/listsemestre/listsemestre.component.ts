import { Component, OnInit } from '@angular/core';
import { AddsemestreService } from 'app/services/addsemestre/addsemestre.service';
import { Router } from '@angular/router';
import {  Artista} from 'app/modelo/data';
import { CanActivate } from '@angular/router';
import { AutenticarService } from 'app/services/autenticar.service';

@Component({
  selector: 'app-listsemestre',
  templateUrl: './listsemestre.component.html',
  styleUrls: ['./listsemestre.component.scss']
})
export class ListsemestreComponent implements OnInit {

  semestre:Artista[];
  constructor(private service:AddsemestreService, private router:Router, private authService:AutenticarService) { }
  

  Eliminar(semestre:Artista){
    this.service.deletesemestre(semestre)
    .subscribe(data=>{
      this.semestre=this.semestre.filter(s=>s!==semestre);
      alert("Semestre eliminado");
    })

  }

  ngOnInit() { 
    this.service.getSemestre().subscribe(data=>{this.semestre=data;})
  }

}
