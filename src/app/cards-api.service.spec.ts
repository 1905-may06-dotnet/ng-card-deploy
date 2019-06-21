import { TestBed } from '@angular/core/testing';

import { CardsApiService } from './cards-api.service';
import { HttpClient } from '@angular/common/http';

describe('CardsApiService', () => {
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpSpy }
    ]
  }));

  it('should be created', () => {
    const service: CardsApiService = TestBed.get(CardsApiService);
    expect(service).toBeTruthy();
  });
});
