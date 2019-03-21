import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { DataModule } from './data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PaginationComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    DataModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
