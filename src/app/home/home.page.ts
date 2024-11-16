import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private rickAndMortyService: ApiService
  ) {}

  ngOnInit() {
    this.rickAndMortyService.obtienePersonajes().subscribe({
      next: () => {
        console.log('Personajes obtenidos');
      },
    });
  }

}
