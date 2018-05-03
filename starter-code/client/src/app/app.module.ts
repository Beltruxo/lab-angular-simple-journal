import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { ListServiceService } from './list-service.service';
import { routes } from './routes.routing';
import { RouterModule } from '@angular/router';
import { SingleComponentComponent } from './single-component/single-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleComponentComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

