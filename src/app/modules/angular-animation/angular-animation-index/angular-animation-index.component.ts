import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-animation-index',
  templateUrl: './angular-animation-index.component.html',
  styleUrls: ['./angular-animation-index.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        width: '100px',
        // transform: 'transitionX(0)',
        transition: 'width 2s',
        // 'transition-timing-function': 'linear'
      })),
      state('highlighted', style({
        backgroundColor: 'green',
        width: '900px',
        // transform: 'transitionX(100)',
        transition: 'width 2s',
        // 'transition-timing-function': 'linear'
      })),
      transition('normal => highlighted', animate(800)),
      transition('highlighted => normal', animate(1200))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'transitionX(0) scale(1)',
      })),
      state('highlighted', style({
        backgroundColor: 'green',
        transform: 'transitionX(100) scale(1)',
      })),
      state('shrunken', style({
        backgroundColor: 'yellow',
        transform: 'transitionX(0) scale(0.5)',
      })),
      transition('normal => highlighted', animate(800)),
      transition('highlighted => normal', animate(1200)),
      transition('shrunken <=> *', animate(500))
    ])
  ]
})
export class AngularAnimationIndexComponent {
  state: string = 'normal';
  wildState: string = 'normal';

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal'
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'
  }

  onShrink() {
    this.wildState = 'shrunken'
  }
}
