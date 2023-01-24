import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { dataType } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }
  public date = new Date();
  public msg = "";
  public name = "Harshal"

  ngOnInit(): void {
    this.getGreeting()
    this.getData()
  }

  getGreeting() {
    let hrs = this.date.getHours()

    if (hrs < 12)
      this.msg = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
      this.msg = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
      this.msg = 'Good Evening';
  }

  data:dataType[]=[];
  getData(){
    this.api.get().subscribe(res=>{
      this.data=res;
    })
    // this.Images=["assets/1.jpeg","assets/4.webp","assets/5.webp","assets/6.webp","assets/3.webp","assets/4.webp","assets/5.webp","assets/6.webp"]
  }
}
