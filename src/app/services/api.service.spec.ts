import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { mockRickAndMorty } from '../mocks/rickandmorty.mock';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ApiService(httpClientSpy);
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('obtiene personajes', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockRickAndMorty));
    service.obtienePersonajes().subscribe({
      next: (response) => {
        expect(response).toEqual(mockRickAndMorty);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(httpClientSpy.get.calls.first().args[0]).toBe('https://rickandmortyapi.com/api/character/');
        done();
      },
    });

  })
});
