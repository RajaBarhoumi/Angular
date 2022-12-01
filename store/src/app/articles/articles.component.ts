import { Component, OnInit } from '@angular/core';
import { article } from "../model/article.model";
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
tab_art: article[];
article!: article;
zeroStyle = {'color':'red'};
suppArticle(art: article){
  let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
  if (conf) {
  this.articleService.supprimerArticle(art);
  console.log("Suppression avec succes :"+art.libelle);
  }
  }

constructor(private articleService: ArticleService, public authServ : AuthService ) {
  this.tab_art = articleService.listeArticles();
  }
  ngOnInit(): void {
  }
}
