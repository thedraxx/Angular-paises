import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input() public placeholder: string ='';

  @Output() public onValue = new EventEmitter<string>();

  onSearch(value: string) {
    console.log("desde search-box")

    this.onValue.emit(value);
  }
}
