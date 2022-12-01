import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/livre.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  newArticle = new Article();
  categories! : Categorie[];
  newCodec! : number;
  newCateg! : Categorie;

  constructor(private articleService: ArticleService,private router :Router) { }
  addArticle(){
    this.newCateg = this.articleService.consulterCategorie(this.newCodec);
    this.newArticle.categ = this.newCateg;
    this.articleService.ajouterArticle(this.newArticle);
    this.router.navigate(['books']);
    }
    suppArticle(art: Article){
      let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
      if (conf) {
      this.articleService.supprimerArticle(art);
      console.log("Suppression avec succes :"+art.titre);
      }
      }
    

  ngOnInit(): void {
    this.categories = this.articleService.listeCategories();
  }

}
