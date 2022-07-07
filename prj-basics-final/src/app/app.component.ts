import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSelection: number;

  constructor() {
    this.currentSelection = 1;
  }

  onSelectionChanged(selection: number) {
    this.currentSelection = selection;
  }
}
