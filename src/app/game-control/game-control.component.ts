import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  count=0;
  @Output() eventStarted = new EventEmitter<number>();
  @Output() eventStopped = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onGameStart(){
  this.interval=setInterval(()=>{
 this.eventStarted.emit(this.count+1);
 this.count++
  }, 1000);
  }

  onGameStop(){
clearInterval(this.interval);
  }

}
