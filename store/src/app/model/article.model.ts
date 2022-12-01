import { Categorie } from "./categorie.model";
export class article {
  code?: number; libelle?: string; prix?: number; qte?: number; dateAjout?: Date;
  categ!: Categorie;
}
