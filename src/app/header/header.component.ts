import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changeRoute = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.changeRoute.emit('recipes');
  }

  setRoute(route: string) {
    this.changeRoute.emit(route);
  }
}
