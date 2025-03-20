import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.username === 'admin' && this.password === 'password123') {
      this.errorMessage = '';
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }

}
