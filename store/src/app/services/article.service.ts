import { Injectable } from '@angular/core';
import { article } from '../model/article.model';
import { Categorie } from '../model/categorie.model';
@Injectable({
providedIn: 'root'
})
export class ArticleService {
  article!: article;
  ajouterArticle(art: article){
    this.tab_art.push(art);
    console.log("Ajout avec succes : "+art.libelle);
    }
    supprimerArticle(art: article){
      const index = this.tab_art.indexOf(art, 0);
      if (index > -1) {
      this.tab_art.splice(index, 1);
      }
      }
      listeCategories():Categorie[] {
        return this.Categories;
        }
        consulterCategorie(id:number): Categorie{
        return this.Categories.find(cat => cat.codec == id)!;
        }


tab_art : article[];
Categories! : Categorie[];


constructor() {
  this.Categories = [
    {codec : 1, nomCat : "Périphérique PC", description:"Périphériques d'entrée/sortie pour les PCs"},
    {codec : 2, nomCat : "PC", description:"Toutes les marques de Laptops"},
    {codec : 3, nomCat : "Smartphone", description:"Toutes les marques de téléphones"}
    ];
    this.tab_art = [
      {code: 1, libelle : "Souris Wifi", prix : 39.100, qte : 8,
      dateAjout : new Date("09/27/2022"),categ:{codec : 1, nomCat : "Périphérique PC", description:"Périphériques d'entrée/sortie pour les  PCs"}},
      {code : 2, libelle : "Clavier Gaming", prix : 45.900, qte : 4,
      dateAjout : new Date("09/30/2022"), categ:{codec : 1, nomCat :
      "Périphérique PC", description:"Périphériques d'entrée/sortie pour les PCs"}},
      {code : 3, libelle : "Samsung S21", prix : 678.9, qte : 0,
      dateAjout : new Date("10/02/2022"),categ:{codec : 3, nomCat :
      "Smartphone", description:"Toutes les marques de téléphones"}}
      ];


}
calculNbArticles(): number{
  return this.tab_art.length;
  }
  calculTotalStock(): number{
  let tot=0;
  this.tab_art.forEach( (art) => {
  tot += art.prix! * art.qte!;
  })
  return tot;
  }
  calculNbCategories(): number{
  return this.Categories.length;
  }
listeArticles():article[] {
return this.tab_art;
}
consulterArticle(id:number): article{
  this.article = this.tab_art.find(art => art.code == id)!;
  return this.article;
  }
  modifierArticle(art: article) {
  this.supprimerArticle(art);
  this.ajouterArticle(art);

  }
}
