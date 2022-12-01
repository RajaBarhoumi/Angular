import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from '../services/livre.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  critere! : string;
  articles! : Article[];
  titreArticle! : string;
  categRech! : number;
  categories! : Categorie[];
 constructor(private livreService: ArticleService ) {
    this.articles = livreService.listeArticles();
 }
 chercherParTitre(title : string){
    this.articles = this.livreService.listeArticles();
    this.articles = this.articles.filter(art => art.titre.toLowerCase().includes(title.toLowerCase())); 
 }


  chercherParGenre() { 
    this.articles = this.livreService.listeArticles();
    this.articles = this.articles.filter(art => art.categ.codec == this.categRech); 
    }

  reset(){
    this.articles = this.livreService.listeArticles(); 
  }

  ngOnInit(): void { 
        this.categories = this.livreService.listeCategories();
    }


}
