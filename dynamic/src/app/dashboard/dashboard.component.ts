import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userData: any;

  constructor(private route: ActivatedRoute, private router: Router, private dashboardService: DashboardService){
    const username = this.router.getCurrentNavigation()?.extras.state?.['username'];

    if (username) {
      this.dashboardService.getUserInfo(username).subscribe({
        next: (data) => this.userData = data,
        error: (err) => console.error('Failed to fetch user info', err)
      });
    } else {
      console.error('No username provided');
    }
  }

  navigateToHome(){
    this.router.navigate(["/home"]);
  }

  navigateToCart(){
    this.router.navigate(["/cart"]);
  }

}
