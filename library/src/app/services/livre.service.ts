import { Injectable } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
 providedIn: 'root'
})
export class ArticleService {
 tab_art : Article[];
 article !: Article;
 categories! :Categorie[];
 constructor() {
     this.categories = [ 
          {codec : 1, nomcat : "Comique", description:"rire"},
          {codec : 2, nomcat : "Tragidique", description:"histoire long"},
          {codec : 3, nomcat : "Politique", description:"histoire long"},
          {codec : 4, nomcat : "Dramatique", description:" histoire d'amour"},          
          {codec : 5, nomcat : "Fiction", description:"histoire long"}
          ];
          
 this.tab_art = [
      {code : 1,titre : "l'alchimiste", ecrivain:"Paulo Coelho",genre:"philosophique",annees:1995,qte:42,prix:20,categ:{codec : 1, nomcat : "romantique", description:"histoire d'amour"}},
      {code : 2,titre : "La formule de Dieu", ecrivain:"José Rodrigues dos Santos",genre:"Historique",annees:2006,qte:22,prix:20,categ:{codec : 2, nomcat : "Tragidique", description:"histoire long"}},
      {code : 3,titre : "Veronika décide de mourir", ecrivain:"Paulo Coelho",genre:"Dramatique",annees:1998,qte:23,prix:20,categ:{codec : 3, nomcat : "comique", description:"rire"}},
      {code : 4,titre : "Sang d'encre", ecrivain:" Cornelia Funke",genre:"Aventure",annees:2005,qte:154,prix:20,categ:{codec : 4, nomcat : "Dramatique", description:" histoire d'amour"}},
      {code : 5,titre : "Les misérables", ecrivain:"Victor Hugo",genre:"Tragidique",annees:1862,qte:86,prix:20,categ:{codec : 5, nomcat : "Fiction", description:"histoire long"}},
      {code : 6,titre : "Le petit prince", ecrivain:"Antoine de Saint-Exupéry",genre:"Imaginaire",annees:1943,qte:5,prix:20,categ:{codec : 3, nomcat : "Politique", description:"histoire long"}},
      {code : 7,titre : "Le rouge et le noir", ecrivain:"Stendhal",genre:"Fiction psychologique",annees:1830,qte:93,prix:20,categ:{codec : 4, nomcat : "Dramatique", description:" histoire d'amour"}},
      {code : 8,titre : "Le grang Meaulnes", ecrivain:"Alain-Fournier",genre:"Fiction",annees:1913,prix:20,qte:71,categ:{codec : 5, nomcat : "Fiction", description:"histoire long"}},
      {code : 9,titre : "Jamais sans ma fille", ecrivain:"Betty Mahmoody",genre:"Biographie",annees:1987,qte:17,prix:20,categ:{codec : 3, nomcat : "Politique", description:"histoire long"}},
      {code : 10,titre : "La nuit des temps", ecrivain:"René Barjavel",genre:"Science-fiction",annees:1968,qte:2,prix:20,categ:{codec : 2, nomcat : "Tragidique", description:"histoire long"}},
      {code : 11,titre : "Sans famille", ecrivain:"Hector Malot",genre:"Roman d’initiation",annees:1878,qte:25,prix:20,categ:{codec : 5, nomcat : "Fiction", description:"histoire long"}},
      {code : 12,titre : "La cité de la joie", ecrivain:"Dominique Lapierre",genre:"Fiction",annees:1985,qte:70,prix:20,categ:{codec : 3, nomcat : "comique", description:"rire"}},
      {code : 13,titre : "La peste", ecrivain:"Albert Camus",genre:"Philosophique",annees:1974,qte:81,prix:20,categ:{codec : 2, nomcat : "Tragidique", description:"histoire long"}},
      {code : 14,titre : "L'etranger", ecrivain:"Albert Camus",genre:"Policier",annees:1942,qte:42,prix:20,categ:{codec : 3, nomcat : "Politique", description:"histoire long"}},
      {code : 15,titre : "Le parfum", ecrivain:"Patrick Süskind",genre:"Horreur",annees:1985,qte:51,prix:20,categ:{codec : 3, nomcat : "comique", description:"rire"}},
      {code : 15,titre : "Paroles", ecrivain:"Jacques Prévert",genre:"Science-fiction",annees:1968,qte:2,prix:20,categ:{codec : 5, nomcat : "Fiction", description:"histoire long"}}
 ];
 }
 listeArticles():Article[] {
 return this.tab_art;
 }
 ajouterArticle(art: Article){
  this.tab_art.push(art);
  console.log("Ajout avec succes : "+art.titre);
  }
  supprimerArticle(art: Article){
    const index = this.tab_art.indexOf(art, 0);
    if (index > -1) {
    this.tab_art.splice(index, 1);
    }
   }

   consulterBook(id:number): Article{
     this.article = this.tab_art.find(art => art.code == id)!;
     return this.article;
     }
     modifierBook(art: Article) { 
     this.supprimerArticle(art);
     this.ajouterArticle(art);
     }

     listeCategories():Categorie[] {
          return this.categories;
         }
     consulterCategorie(id:number): Categorie{ 
          return this.categories.find(cat => cat.codec == id)!;
         }

         calculNbArticles(): number{ 
          return this.tab_art.length;
         } 
         /*calculTotalStock(): number{ 
          let tot=0;
          this.tab_art.forEach( (art) => {
          tot += art.prix! * art.qte!;
          })
          return tot;
         }*/

         calculTotalStock(): number{ 
          let tot=0;
          this.tab_art.forEach( (art) => {
               //alert (art.prix);
          tot += art.prix! * art.qte!;
          })
          //alert (tot);
          return tot;
         }

         calculNbCategories(): number{
          return this.categories.length;
         }

}
