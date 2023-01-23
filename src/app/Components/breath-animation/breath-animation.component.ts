import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-breath-animation',
  templateUrl: './breath-animation.component.html',
  styleUrls: ['./breath-animation.component.css']
})
export class BreathAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startCounter()
  }

  counter: number = 5;
  counter1: number = 15;

  interval: any;

  msg = "Breath In";
  startCounter() {
    this.interval = interval(1000).subscribe(val => {
      this.counter--;
      this.counter1--;
      if (this.counter1===15) {
        this.msg = "Breath In";
        this.counter = 5;
        // this.counter1=
      }
      else if (this.counter1 === 10) {
        this.msg = "Hold"
        
        this.counter = 5
      }
      else if (this.counter1 === 5) {
        this.msg = "Breath Out"
        this.counter = 5
      }
      else if( this.counter1===0){
        this.counter1 = 16;
        this.counter=5
      }
    });
    setTimeout(() => {
      this.interval.unsubscribe();
    }, 600000);  //10min
  }
}
