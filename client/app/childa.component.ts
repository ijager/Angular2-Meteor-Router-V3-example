import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'childa',
  template: 'Child A # {{n}}'
})
export class ChildAComponent implements OnInit {
  n :number;
  sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.n = +params['id']; // (+) converts string 'id' to a number
   });
  }
}
