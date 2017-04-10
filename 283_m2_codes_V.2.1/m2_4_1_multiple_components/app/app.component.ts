/* Importing ngOnInit from Angular Core */
import {Component, OnInit} from '@angular/core';
//import {Component, OnInit, provide} from '@angular/core';
import {Developer} from './dev';
import {DevDetailsComponent} from './dev-details.component';

/* Importing DevService */
import {DevValueService, DevService} from './dev.service';

/* Adding DevService as a provider for the Component */
 
@Component({
  selector: 'root-app',
  template:`
    <h2>Edureka Components - Using Providers to create Factory - Introduction</h2>
    <h3>{{title}}</h3>
    <dev-table (clickevent)="onSelect($event)"></dev-table>
    <!-- 
        Converted below section to a directive and imported as dependancy module. 
        Required variable of selected developer passed as attribute value 
    -->
    <dev-details [selectedDeveloper]="selectedDeveloper"></dev-details>
  `,
  styles:[`
    .selected {
      background-color: #ccc !important;
      color: white;
    }
    .dev{
        width: 150px;
    }
    .dev .spanbackground{
        width: 50px;
    }
  `],
  //providers: [DevValueService, DevService]
})
/* You can use useValue, useClass for value and service class respectively */
/* You can use useExisting if the provider or service has already been instanciated */

  /* Converting the developer into array of type Developer */
  /* Defining Internal function to get developers list from model-developers */
  /* The service can have values, objects, and numbers as well like any JS Variable */  
export class RootComponent {
  constructor(private _DevService: DevService) { }
  public title = 'Developers List';
  public developers : Developer[];
  public selectedDeveloper: Developer;
  public onSelect(event) { this.selectedDeveloper = event.value; }
}
