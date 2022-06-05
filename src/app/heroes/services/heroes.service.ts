import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl : string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable <Heroe[]>{
    return this.http.get<Heroe []>( `${this._baseUrl}/heroes` )
  }

  getHeroeById( id: string): Observable <Heroe> {
    return this.http.get<Heroe>( `${this._baseUrl}/heroes/${ id }` );
  }

  getHeroBySugges( suggest: string ): Observable< Heroe []>{
    return this.http.get< Heroe []>( `${ this._baseUrl }/heroes?q=${ suggest }&_limit=6`)
  }

  addHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.post< Heroe>( `${ this._baseUrl }/heroes`, heroe)
  }

  updateHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.put<Heroe>( `${this._baseUrl}/heroes/${ heroe.id }`, heroe );
  }

  deleteHeroe( id: string ): Observable<any>{
    return this.http.delete< any >(`${ this._baseUrl }/heroes/${ id }`)
  }
} 
