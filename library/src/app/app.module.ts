import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { MenuComponent } from './menu/menu.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    SearchBookComponent,
    DashboardComponent,
    ConnectComponent,
    MenuComponent,
    ForbiddenComponent,
    ConnectHttpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
