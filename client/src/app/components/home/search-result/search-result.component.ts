import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  public modalHandler(val) {
      const modal = document.getElementById("modal");
      const button = document.getElementById("button");
      if (val) {
          modal.classList.remove("hidden");
          button.classList.add("hidden");
      } else {
          modal.classList.add("hidden");
          button.classList.remove("hidden");
      }
  }

 
}
