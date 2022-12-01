import { Categorie } from "./categorie.model";
export class Article{
    code ? : number;
    titre ! : string;
    ecrivain ? : string;
    genre ? :string;
    annees ? : number;
    qte ? : number;
    prix?: number;
    categ!:Categorie;
}

