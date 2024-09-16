import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  private url:string = 'https://restcountries.com/v3.1';

  constructor(private httpClient:HttpClient) { }

  public searchCountryByAlphaCode(code : string): Observable<Country | null > {

    return this.httpClient.get<Country[]>(`${this.url}/alpha/${code}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() =>of(null))
    );
  }

  public searchCapital(term : string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([])
      })
    );
  }

  public searchCountry(term : string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/name/${term}`)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([])
      })
    );
  }

  public searchRegion(term : string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/region/${term}`)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([])
      })
    );
  }
}
