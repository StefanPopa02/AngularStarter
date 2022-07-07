import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ref;
  currentNumber: number;
  @Output() onNewNumberEmitted: EventEmitter<number> = new EventEmitter();
  constructor() {
    this.currentNumber = 1;
  }

  ngOnInit(): void {
  }

  incrementAndEmit() {
    this.onNewNumberEmitted.emit(this.currentNumber);
    this.currentNumber++;
  }

  onStartGame() {
    console.log("Game started!");
    this.ref = setInterval(() => {
      this.incrementAndEmit();
    }, 1000);
  }

  onStopGame() {
    console.log("Game stopped!");
    clearInterval(this.ref);
  }

}
