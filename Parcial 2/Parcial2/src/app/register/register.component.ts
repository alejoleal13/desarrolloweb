import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { Users } from '../_models';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    registro: Users =new Users()

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

        register(action: string):void{
            this.userService.create(this.registro)
            .subscribe(data=>{alert("Usuario Creado");
            this.router.navigate(["login"]);
            
        
          })
          }
        
}
