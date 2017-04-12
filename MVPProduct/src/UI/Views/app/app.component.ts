import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { routerTransition } from '../app/router.transition/router.transition';
import { ConsumerService } from './Service/Services';
@Component({
  selector: 'my-app',
  template: `
   <header></header>
 <ul >
       <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
       <li><a routerLink="/consumer" routerLinkActive="active">Consumers</a></li>
       <li> <a routerLink="/supplier" routerLinkActive="active">Suppliers</a> </li>
       <li><a routerLink="/marketer" routerLinkActive="active">Marketer</a></li>
       <li><a routerLink="/product" routerLinkActive="active">Products</a></li>
       <li><a routerLink="/supplierP" routerLinkActive="active">Supplier products</a></li>
       <li><a routerLink="/marketerP" routerLinkActive="active">Marketer products</a></li>
  </ul>
  <router-outlet></router-outlet>
 
  `,
    styleUrls: ['app/lib/css/styles.css'],
    providers: [ConsumerService]
  
})
export class AppComponent { 
  //constructor(private router: Router){} 
}
//<home [@routerTransition]=""></home>