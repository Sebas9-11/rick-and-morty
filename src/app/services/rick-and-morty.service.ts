import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacter() {
    return this.http.get<Character>(`${this.baseUrl}/character`);
  }
}
