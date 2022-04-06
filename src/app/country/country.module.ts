import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForRegionComponent,
    ViewCountryComponent,
    ForCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports:  [
    ForCapitalComponent,
    ForRegionComponent,
    ViewCountryComponent,
    ForCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
