import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  public cocktails = [];

  constructor(public cocktailService:CocktailService){}

  public ngOnInit(){
    this.cocktailService.getCocktails().subscribe(data => (this.cocktails = data));  }

  

}
