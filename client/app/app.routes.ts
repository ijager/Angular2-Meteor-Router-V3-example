import { provideRouter, RouterConfig } from '@angular/router';

import { ListAComponent } from './lista.component';
import { ListBComponent } from './listb.component';
import { StartComponent } from './start.component';
import { ChildAComponent } from './childa.component';

export const approutes: RouterConfig = [
  {path: '', component: StartComponent, pathMatch:'full'},
  {path: 'listA', component: ListAComponent,
     children: [
      { path: '', component: StartComponent, pathMatch:'full'},
      { path: ':id', component: ChildAComponent }
    ]},
  {path: 'listB', component: ListBComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(approutes)
];
