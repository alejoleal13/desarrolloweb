import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { AdministratorComponent } from '../../administrator/administrator.component';
import { ListsemestreComponent } from '../../listsemestre/listsemestre.component';
import { LoginComponent } from 'app/login/login.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { RegisterComponent } from 'app/register/register.component';
import { ConsultartistaComponent } from 'app/consultartista/consultartista.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    AdministratorComponent,
    ListsemestreComponent,
    LoginComponent,
    RegisterComponent,
    ConsultartistaComponent
    
  ]
})

export class AdminLayoutModule {}
