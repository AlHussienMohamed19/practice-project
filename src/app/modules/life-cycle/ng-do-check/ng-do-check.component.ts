import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.scss']
})
export class NgDoCheckComponent implements OnInit {

  @Input() input!:string;
  @Input() placeholder!:string;

  @Output() childEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('Child Constructor Hook is called');
  }

  ngOnInit(): void {
    console.log('Child NgOnInit Hook is called');
  }

  passDataToParent() {
    this.childEmitter.emit(this.input)
  }
}
