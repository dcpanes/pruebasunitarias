import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRickAndMorty } from '../interfaces/rickAndMorty.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'https://rickandmortyapi.com/api/character/';
  constructor(
    private http: HttpClient
  ) { }

  obtienePersonajes() {
    return this.http.get<IRickAndMorty>(this.url);
  }
}
