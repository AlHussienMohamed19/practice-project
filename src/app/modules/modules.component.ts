import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  template: `<router-outlet></router-outlet>`, 
})
export class ModulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
