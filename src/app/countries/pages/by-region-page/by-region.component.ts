import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  constructor(private contriesService:ContriesService) { }

  public countries : Country[] = [];

  searchByRegion( term: string ):void {
    this.contriesService.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries;
      }
    );
  }

}
