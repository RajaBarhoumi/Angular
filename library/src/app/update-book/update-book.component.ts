import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/livre.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  articleCourant = new Article();
  categories! : Categorie[];
  codecModifie! : any;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router :Router,) {}
    modifArticle(){ 
      this.articleCourant.categ = this.articleService.consulterCategorie(this.codecModifie);
      this.articleService.modifierBook(this.articleCourant);
      console.log("Article modifié avec succes : "+ this.articleCourant.titre+this.articleCourant.ecrivain+":"+this.articleCourant.genre+":"+ ", ajoutée le "+this.articleCourant.annees+", ajoutée le "+this.articleCourant.qte);
      this.router.navigate(['books']);  
    }
   

  ngOnInit(): void {
    this.categories = this.articleService.listeCategories();
    this.articleCourant = this.articleService.consulterBook (this.activatedRoute.snapshot.params['id']);
    console.log("Code livre à modifier "+this.articleCourant.code);
    this.codecModifie = this.articleCourant.categ.codec;

  }

}
