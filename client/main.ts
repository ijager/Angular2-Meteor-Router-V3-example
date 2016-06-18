// main entry point
//import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]).catch(err => console.error(err));
