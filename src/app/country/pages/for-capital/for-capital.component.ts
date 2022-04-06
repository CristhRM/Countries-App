import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html'
})
export class ForCapitalComponent {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( term: string) {
    this.isError = false;
    this.term = term;

    this.countryService.searchCapital(this.term).subscribe({
      next: (capitals) => {
        console.log(capitals);
        this.countries = capitals;
      },
      error: (e) => {
        this.isError = true;
        this.countries = [];
      }
    });
  }

  suggestions(term: string) {
    this.isError = false;
    // TODO: crear sugerencias 
  }
}
