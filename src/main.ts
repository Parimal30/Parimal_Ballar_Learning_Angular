import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CricketListItemComponent} from './app/cricket-list-item/cricket-list-item.component';
import {CricketListComponent} from './app/cricket-list/cricket-list.component';
import * as path from 'node:path';

const routes: Routes = [
  {path: '', redirectTo: '/crickets', pathMatch: 'full'},
  {path: 'crickets', component: CricketListComponent},
  {path: 'crickets/:playerName', component: CricketListItemComponent},
]
bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]})
  .then(r => console.log('Bootstrap successfull.'));
