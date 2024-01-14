import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() fullView = new EventEmitter();

  constructor() {

  }
  ngOnInit(): void {
  }
  fullLayout() {
    this.fullView.emit();
  }
}
