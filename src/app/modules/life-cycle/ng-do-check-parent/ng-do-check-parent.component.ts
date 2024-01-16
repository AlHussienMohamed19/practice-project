import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-check-parent',
  templateUrl: './ng-do-check-parent.component.html',
  styleUrls: ['./ng-do-check-parent.component.scss']
})
export class NgDoCheckParentComponent implements OnInit,DoCheck {
  data:string = '';
  placeholder= 'Enter something';

  constructor() {
    console.log('Parent Constructor Hook is called');
  }

  ngOnInit(): void {
    console.log('Parent NgOnInit Hook is called');
  }

  ngDoCheck(): void {
    console.log('Parent NgDoCheck Hook is called');
  }
}
