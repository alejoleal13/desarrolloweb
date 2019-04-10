import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Users } from '../_models';
import { AlertService } from './alert.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterComponent } from 'app/register/register.component';

@Injectable()
export class AuthenticationService {
    user: Observable<any>;
    constructor(private http: HttpClient,
        private alertService: AlertService,private router: Router) { }

    login(username: string, password: string) {

        
        this.user =this.http.get<any>('http://localhost:8080/api/getByUser?Usuario='+username)
            .map(user => {
                console.log("hola")
                console.log(username);
                // login successful if there's a jwt token in the response
                if (user.Contrasena == password) {
                    console.log("Ok")
                    //this.router.navigateByUrl("register");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return this.user
                }
                else
                {
                    console.log("Mal")
                    this.router.navigate(["register"]);
                }
            });
            return this.user
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}