import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule,MatFormFieldModule,MatInputModule, MatSelectModule} from '@angular/material';
import { EdicionComponent } from './edicion/edicion.component';
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component'
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    EdicionComponent,
    DetalleTweetComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
