import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty.service';
import { Character } from '../../../types';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    created: '',
    episode: [],
    gender: '',
    image: '',
    location: {
      name: '',
      url: '',
    },
    origin: {
      name: '',
      url: '',
    },
    url: '',
  };

  isHidden: boolean = true;
  next = '';
  prev = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.rickAndMortyService.getCharacter().subscribe((data: any) => {
      this.next = data.info.next;
      this.prev = data.info.prev;
      this.characters = data.results;
    });
  }

  moreInfo(data: Character) {
    this.isHidden = false;
    this.character = data;
  }

  close() {
    this.isHidden = true;
  }
}
