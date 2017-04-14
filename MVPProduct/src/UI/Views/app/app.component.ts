import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { routerTransition } from '../app/router.transition/router.transition';
import { ConsumerService } from './Service/Services';
@Component({
  selector: 'my-app',
  template: `
   <header></header>
 <ul id="menu">
       <li id="lis"><a routerLink="/home" routerLinkActive="active">Home</a></li>
       <li id="lis"><a routerLink="/consumer" routerLinkActive="active">Consumers</a></li>
       <li id="lis"> <a routerLink="/supplier" routerLinkActive="active">Suppliers</a> </li>
       <li id="lis"><a routerLink="/marketer" routerLinkActive="active">Marketer</a></li>
       <li id="lis"><a routerLink="/product" routerLinkActive="active">Products</a></li>
       <li id="lis"><a routerLink="/supplierP" routerLinkActive="active">Supplier products</a></li>
       <li id="lis"><a routerLink="/marketerP" routerLinkActive="active">Marketer products</a></li>
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