import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { MenuComponent } from './menu/menu.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    SearchArticleComponent,
    DashboardComponent,
    ConnectComponent,
    MenuComponent,
    ForbiddenComponent,
    ConnectHttpComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
