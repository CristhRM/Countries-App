import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class ForCountryComponent {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  constructor(private countryService: CountryService) { }

  search( term: string) {
    this.isError = false;
    this.term = term;
    this.suggestedCountries = [];

    this.countryService.searchCountry(this.term).subscribe({
      next: (countries) => {
        this.showSuggested = false;
        this.countries = countries;
      },
      error: (e) => {
        this.isError = true;
        this.countries = [];
      }
    });
  }

  suggestions(term: string) {
      this.isError = false;
      this.term = term;
      this.showSuggested = true;
      this.countryService.searchCountry(term)
      .subscribe({
        next: countries => this.suggestedCountries = countries.splice(0, 3),
        error: () => this.suggestedCountries = []
      });
  }
}
