import { Component, provide, NgZone, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
  selector: 'app',
   template: `
   <div class='home'>
  <header>
    <nav>
      <div class="menu">
      <a [routerLink]="['listA']"> List A </a>
      <a [routerLink]="['listB']"> List B </a>
      </div>
    </nav>
  </header>

  <div class="container">
    <router-outlet></router-outlet>
  </div>

</div>

  `,
  directives: [ROUTER_DIRECTIVES, ],
  providers: []

})
export class AppComponent {}
