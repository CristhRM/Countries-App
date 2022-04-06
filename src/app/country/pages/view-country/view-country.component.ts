import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country, Translation } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
      }

      .mr-1 {
        margin-right: 5px;
      }
    `
  ]
})
export class ViewCountryComponent implements OnInit {
  country!: Country;
  borders: string[] = [];

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchByCode(id)),
        tap(console.log)
      )
      .subscribe(response => {
        this.country = response[0];
        this.borders = response[0].borders;
      });

    /* this.activateRoute.params.subscribe(({id}) => {
      console.log(id);
      this.countryService.searchByCode(id).subscribe(country => {
          console.log(country);
      });      
    }); */
  }

}
