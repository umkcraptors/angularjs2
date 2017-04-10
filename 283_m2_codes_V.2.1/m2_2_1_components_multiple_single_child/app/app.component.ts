import {Component} from '@angular/core';
import {Developer} from './dev';

@Component({
  selector: 'root-app',
  template:`
    <h2>Edureka Multiple Components - Single Child</h2>
    <h3>{{title}}</h3>
    <ul class="dev">
         
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="spanbackground">{{developer.name}}</span> -  {{developer.skill}}
      </li>
    </ul>
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
  `]
})

export class RootComponent {
  public title = 'Developers List';
  public developers = DEVELOPERS;
  public selectedDeveloper: Developer;
  public onSelect(developer: Developer) { this.selectedDeveloper = developer; }
}

var DEVELOPERS: Developer[] = [
  { "name": 11, "skill": "Java Dev" },
  { "name": 12, "skill": "C++ Dev" },
  { "name": 13, "skill": "Python Dev" },
  { "name": 14, "skill": "NodeJS Dev" }
];