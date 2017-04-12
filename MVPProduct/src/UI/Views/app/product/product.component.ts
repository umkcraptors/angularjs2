import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'supplier',
  template: '<h2>Supplier</h2>',
  styleUrls: ['app/lib/css/styles.css'],
  animations: [routerTransition()],
            host: {'[@routerTransition]': ''}
})
export class productComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}