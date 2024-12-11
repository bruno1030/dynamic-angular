import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for the home page
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardComponent,  // Importing the standalone ProductCardComponent
    HomeComponent
  ],
})

export class HomeModule { }
