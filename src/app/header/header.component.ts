import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route = '';

  constructor() {
    this.route = this.getHash();
  }

  ngOnInit() {
  }

  getHash() {
    return window.location.hash ? window.location.hash.split('#')[1] : window.location.hash = 'index';
  }

  setHash(hash: string) {
    this.route = window.location.hash = hash;
  }

  changeRoute(event: Event) {
    const requested: string = (<HTMLButtonElement>event.target).getAttribute('data-page');
    if (requested) {
      this.setHash(requested);
    }
  }
}
