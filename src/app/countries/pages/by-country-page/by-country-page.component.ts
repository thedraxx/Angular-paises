import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  constructor(private contriesService:ContriesService) { }

  public countries : Country[] = [];

  searchByCountry( term: string ):void {
    this.contriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;
      }
    );
  }


}
