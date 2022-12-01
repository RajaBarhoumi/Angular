import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from '../services/livre.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  zeroStyle = {'color':'red'};

  tab_art : Article[];
  constructor(private articleService: ArticleService,public authServ : AuthService ) {
  this.tab_art = articleService.listeArticles();
  }
 
    /*
    suppArticle(art: Article) {
      this.articleService.supprimerArticle(art);
      console.log("Suppression avec succes :"+art.titre);
     }
    */

     suppArticle(art: Article){
      let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
      if (conf) {
      this.articleService.supprimerArticle(art);
      console.log("Suppression avec succes :"+art.titre);
      }
      }

  ngOnInit(): void {
  }

}
