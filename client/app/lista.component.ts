import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'lista',
  directives: [ROUTER_DIRECTIVES],
  template:`
  <h1>List A</h1>
  <a class="link" *ngFor="let l of list" (click)="goToChild(l)"> Item {{l}} </a>
  <br>
  <h2> Child Routes: </h2>
  <hr>
  <router-outlet></router-outlet>
  `
})

export class ListAComponent implements OnInit {
  list: any;

  constructor(private router: Router) {
    this.list = [1, 2, 3];
  }

  goToChild(l) {
    console.log('clicked: ', l);
    this.router.navigate(['/listA', l]);
  }

  ngOnInit() {}
}
