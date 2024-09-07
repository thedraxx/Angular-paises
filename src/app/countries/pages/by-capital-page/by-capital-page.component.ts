import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  constructor(private contriesService:ContriesService) { }

  public countries : Country[] = [];

  searchByCapital( term: string ):void {
    this.contriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
      }
    );
  }
}
