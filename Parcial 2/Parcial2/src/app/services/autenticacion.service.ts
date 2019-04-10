import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }
  autenticacion (username: string, password: string){
    console.log('SERVICIO AUT', username, password);
    if (username=='homer' && password=='test'){
      
          return{
            message: 'ingreso realizado',
            user:{
              username:'homer',
              hobbie:'deded'
            }
          };
        }else{
          return {  message: 'Fallo de ingreso'}

        }
  }
}
