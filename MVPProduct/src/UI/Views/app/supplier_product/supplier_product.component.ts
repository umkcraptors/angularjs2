import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'supplierP',
  template: '<h2>Supplier product</h2>',
  styleUrls: ['app/lib/css/styles.css'],
  animations: [routerTransition()],
            host: {'[@routerTransition]': ''}
})
export class supplierPComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}