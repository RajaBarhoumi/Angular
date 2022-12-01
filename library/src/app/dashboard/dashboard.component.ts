import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/livre.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nbArt = 0;
  nbCateg = 0;
  nbUsers = 0;
  totalStoc=0;

  constructor(private artServ : ArticleService, private authServ : AuthService) { 
    this.nbArt = this.artServ.calculNbArticles();
    this.nbCateg = this.artServ.calculNbCategories();
    this.nbUsers = this.authServ.calculNbUsers();
    this.totalStoc = this.artServ.calculTotalStock();
  }

  ngOnInit(): void {
  }

}
