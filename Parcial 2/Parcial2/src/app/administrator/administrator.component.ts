import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddsemestreService } from 'app/services/addsemestre/addsemestre.service';
import { Artista } from 'app/modelo/data';
import { TranslateService } from '@ngx-translate/core';
import { ArtistaService } from 'app/services/artista.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  artista: Artista = new Artista()

  constructor(private translate: TranslateService, private router: Router, private servicio: ArtistaService) {
    this.translate.setDefaultLang('en');
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang);

  }

  list() {

    this.router.navigate(["listsemestre"]);
  }


  ngOnInit() {
  }
  Guardar(): void {
    this.servicio.createArtista(this.artista)
      .subscribe(data => {
        alert("Artista Creado");
        this.router.navigate(["dashboard"]);

      })
  }

}