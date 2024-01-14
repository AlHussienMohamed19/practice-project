import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("mainContent") mainContentDiv!: ElementRef<HTMLElement>;

  title = 'Ahly';
  loading!: boolean;
  fullLayout: boolean = false;
  public getScreenWidth: any;

  constructor(
    private router: Router
  ) {
    this.loading = false;
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading = false;
      }
    })
  }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
    
  }
  @HostListener('window: load', ['$event']) onLoad() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 1000) {
      this.fullLayout = true;
    } else {
      this.fullLayout = false;
    }
  }
  @HostListener('window: resize', ['$event']) onResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 1000) {
      this.fullLayout = true;
    } else {
      this.fullLayout = false;
    }
  }
  fullView() {
    this.fullLayout = !this.fullLayout;
  }
  onActivate(): void {
    (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
  }
}
