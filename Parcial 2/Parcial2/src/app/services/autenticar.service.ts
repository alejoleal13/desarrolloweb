import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  private username: String;
  private hobbie: String;
  constructor() { 
    this.username = 'not user';
  }
  fillUserInfo(username: String, hobbies: String){
    this.username=username;
    this.hobbie=hobbies;
  }
  logout(){
    this.username='';
    this.hobbie='';
  }
  getUserName(){
    return this.username;
  }
  getHobbie(){
    return this.hobbie;
  }
}
