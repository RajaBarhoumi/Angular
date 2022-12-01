import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  newArticle = new article();
  categories! : Categorie[];
  newCodec! : number;
  newCateg! : Categorie;
  constructor(private router :Router, private articleService: ArticleService )
  { }
  addArticle(){
  this.newCateg = this.articleService.consulterCategorie(this.newCodec);
  this.newArticle.categ = this.newCateg;
  this.articleService.ajouterArticle(this.newArticle);
  console.log(this.newArticle);
  this.router.navigate(['articles']);
  }
  ngOnInit(): void {
  this.categories = this.articleService.listeCategories();
  }
  }
