import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DevService} from './dev.service';
import {Developer} from './dev';

@Component({
  selector: 'dev-table',
  template: `
    <ul class="dev">
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="spanbackground">{{developer.name}}</span> -  {{developer.skill}}
      </li>
    </ul>  
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
  providers: [DevService],
  
})

export class DevTableComponent implements OnInit{
    public developers : Developer[];
    public selectedDeveloper : Developer;
    public developer : Developer;
    @Output() clickevent; 
    constructor(private _DevService: DevService) {
        this.clickevent = new EventEmitter();
     }
    onSelect(developer: Developer) { 
        this.selectedDeveloper = developer;
        this.clickevent.next({value: this.selectedDeveloper});   
    }
    getDevelopers(){
      this._DevService.getDevelopers().then(developers => this.developers = developers)
    }
    ngOnInit(){
      this.getDevelopers();
    }
}