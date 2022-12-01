import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {
  articles! : article[];
  libArticle! : string;
  categRech! : number;
  categories! : Categorie[];
  critere! : string;
  constructor(private articleService: ArticleService ) {
  this.articles = articleService.listeArticles();
  }
  chercherParCateg() {
    this.articles = this.articleService.listeArticles();
    this.articles = this.articles.filter(art => art.categ.codec == this.categRech);
    }
    reset(){
    this.articles = this.articleService.listeArticles();
    }
  chercherParLib(lib : string){
this.articles = this.articleService.listeArticles();
this.articles = this.articles.filter(art => art.libelle!.toLowerCase().includes(lib.toLowerCase()));}
chercherParCode(code : string){
  this.articles = this.articleService.listeArticles();
  this.articles = this.articles.filter(art => art.code!.toString()==code);}
  ngOnInit(): void {
  this.categories = this.articleService.listeCategories();
  }

}
