import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../router.transition/router.transition';
//import { ConsumerService } from '../Service/Services';
@Component({
  selector: 'home',
  template: `
       <h2 style="font-family: verdana">Hello!</h2>
              
   
            
   
  `,
  styleUrls: ['app/lib/css/styles.css'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class homeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

/*
    //constructor() { }
   // public imgLink = "http://38.media.tumblr.com/587f48c6548e640f943b7c8c6e3f40de/tumblr_mz8yzmi1XJ1ru39xmo1_500.gif";
   // ngOnInit() { }

//http://lorempixel.com/400/200
//<img [src] = "imgLink">

<ul *ngFor = "let employee of employees" style="font-family: verdana">
       <li>{{employee}}</li>
       </ul>
*/ 