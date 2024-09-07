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

  public searchCapital(term : string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([])
      })
    );
  }


}
