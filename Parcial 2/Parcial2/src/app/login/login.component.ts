import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Users } from '../_models';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    logins: Users =new Users()
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    list(){

      this.router.navigate(["register"]);
    }
  
    login() {
        this.loading = true;
        this.authenticationService.login(this.logins.usuario, this.logins.Contrasena)
            .subscribe(
                data => {
                    this.router.navigate(["dashboard"]);
                },
                error => {
                    this.alertService.error(error);
                    //this.loading = false;
                });
    }
}
