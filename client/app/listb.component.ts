import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'listb',
  directives: [ROUTER_DIRECTIVES],
  template:`
  <h1>List B</h1>
  <div *ngFor="let l of list"> {{l}} </div>
  `
})

export class ListBComponent implements OnInit {
  list: any;

  constructor(private router: Router) {
    this.list = ["Item 1", "Item 2"];
  }

  goToProject(project) {
    console.log('clicked: ', project);
    this.router.navigate(['/listb', 1]);
  }

  ngOnInit() {}
}
