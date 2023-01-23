import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditaion-navbar',
  templateUrl: './meditaion-navbar.component.html',
  styleUrls: ['./meditaion-navbar.component.css']
})
export class MeditaionNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSelected:boolean=false
  selection(){
    this.isSelected=true
  }

}
