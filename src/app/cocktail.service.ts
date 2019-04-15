import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs';
import {Icocktails} from './cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url = '/assets/data/cocktails.json';

  constructor(private http: HttpClient) {}

  

  getCocktails(): Observable<Icocktails[]>{
    return this.http.get<Icocktails[]>(this.url);

  }
}
