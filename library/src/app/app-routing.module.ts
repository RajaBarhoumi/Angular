import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component'; 
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ArticleGuard } from './guard/article.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

const routes: Routes = [
  {path: "books", component : BooksComponent},
 {path: "add-book", component : AddBookComponent,canActivate:[ArticleGuard]},
 {path: "update-book/:id", component: UpdateBookComponent,canActivate:[ArticleGuard]},
 {path: "searchBook", component: SearchBookComponent},
 {path: "dashboard", component: DashboardComponent},
 {path: "connect", component: ConnectComponent},
 // {path: "connect", component: ConnectHttpComponent},
 {path: 'forbidden', component: ForbiddenComponent},
 {path: "", redirectTo: "connect", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
