import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component'
import { SingleComponentComponent } from './single-component/single-component.component';

export const routes: Routes = [
  {  
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: EntryListComponent
  },
  {
    path: ':id', component: SingleComponentComponent
  }
];

