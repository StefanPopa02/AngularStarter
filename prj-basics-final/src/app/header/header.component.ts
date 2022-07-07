import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  selection: number;
  @Output() selectionChange: EventEmitter<number> = new EventEmitter();

  constructor(){
    this.selection = 1;
  }

  onRecipesSelected(){
    this.selection = 1;
    this.selectionChange.emit(this.selection);
  }

  onShoppingListSelected(){
    this.selection = 2;
    this.selectionChange.emit(this.selection);
  }
}
