import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  count = 0;
  countArr: number[] = [];

  onDisplayDetails(){
    this.displayDetails = !this.displayDetails;
    this.countArr.push(++this.count);
  }

  getBgColor(currCount){
    console.log(this.countArr.length);
    return currCount >= 5 ? 'blue' : '';
  }
}
