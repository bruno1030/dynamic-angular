import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin(username: string, password: string){

    return false;
  }
}
