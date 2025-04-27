import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService){

  }

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {

    var loginIsValid = this.loginService.validateLogin(this.username, this.password);

    if (loginIsValid) {
      this.errorMessage = '';
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }

}
