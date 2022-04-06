import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,flags,cca2,translations,border,tld,idd,population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`, {params: this.httpParams});
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`, {params: this.httpParams});
  }

  searchByCode(id: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`);
  }

  searchByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, {params: this.httpParams});
  }
}
