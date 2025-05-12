import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){

  }

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  loginIsValid: boolean = false;

  onLogin() {
    this.loginService.validateLogin(this.username, this.password).subscribe(
      (result: boolean) => {
        this.loginIsValid = result;

        if (this.loginIsValid) {
          this.errorMessage = '';
          this.router.navigate(['/dashboard'], { queryParams: { username: this.username } }); // Redirect
        } else {
          this.errorMessage = 'Invalid username or password!';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred during login.';
      }
    );
  }

}
