import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnInit, OnChanges {

  name:string = '';

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("Ng OnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Ng OnChanges");
    console.log(changes);
  }

}
