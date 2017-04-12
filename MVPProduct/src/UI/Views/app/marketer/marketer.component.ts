import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'marketer',
  template: '<h2>Marketer</h2>',
  styleUrls: ['app/lib/css/styles.css'],
  animations: [routerTransition()],
            host: {'[@routerTransition]': ''}
})
export class marketerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}