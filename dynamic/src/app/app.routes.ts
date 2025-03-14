import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', // Home page set as default (' ')
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'home', // Home page set as default (' ')
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  {
    path: 'cart', // Cart page ('cart')
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) 
  },
  {
    path: 'product/:id', // Product page
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  }, 
  {
    path: 'login', // Login page ('login')
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
];
