import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CricketListItemComponent} from './app/cricket-list-item/cricket-list-item.component';
import {CricketListComponent} from './app/cricket-list/cricket-list.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';

const routes: Routes = [
  {path: '', redirectTo: '/crickets', pathMatch: 'full'},
  {path: 'crickets', component: CricketListComponent},
  {path: 'crickets/:playerName', component: CricketListItemComponent},
  {path:'Modify-list-item', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent}
]
bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]})
  .then(()=> console.log('Bootstrap successfull.'));
