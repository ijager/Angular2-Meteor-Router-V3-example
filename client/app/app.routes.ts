import { provideRouter, RouterConfig } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { provide } from '@angular/core';

import { ListAComponent } from './lista.component';
import { ListBComponent } from './listb.component';
import { StartComponent } from './start.component';
import { ChildAComponent } from './childa.component';

export const approutes: RouterConfig = [
  {path: '', component: StartComponent},
  {path: 'listA', component: ListAComponent,
     children: [
      { path: '', component: StartComponent },
      { path: ':id', component: ChildAComponent }
    ]},
  {path: 'listB', component: ListBComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(approutes),
  provide(APP_BASE_HREF, { useValue: '.' })
];