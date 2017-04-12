import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../router.transition/router.transition';
@Component({
  selector: 'home',
  template: `<h2>Hello!</h2>
            
  
  `,
  styleUrls: ['app/lib/css/styles.css'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class homeComponent implements OnInit {
    constructor() { }
   // public imgLink = "http://38.media.tumblr.com/587f48c6548e640f943b7c8c6e3f40de/tumblr_mz8yzmi1XJ1ru39xmo1_500.gif";
    ngOnInit() { }
}


//http://lorempixel.com/400/200
//<img [src] = "imgLink">