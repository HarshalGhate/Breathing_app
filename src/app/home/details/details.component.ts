import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { dataType } from '../home/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params["id"]){
        this.getByID(params['id'])
      }
      
    })
  }
  
  Data:any;
  getByID(id:number){
    let d:any=[
      {
        "id": 1,
        "Image": "assets/1.jpeg",
        "title": "Sun Set",
        "author": "Dean Amborese",
        "audio": "assets/Music/1.mp3"
      },
      {
        "id": 2,
        "Image": "assets/2.jpeg",
        "title": "Motivation",
        "author": "Roman Ringes",
        "audio": "assets/Music/2.mp3"
      },
      {
        "id": 3,
        "Image": "assets/3.webp",
        "title": "Nature",
        "author": "seth Rollins",
        "audio": "assets/Music/3.mp3"
      },
      {
        "id": 4,
        "Image": "assets/4.webp",
        "title": "",
        "author": "Hello",
        "audio": "assets/Music/4.mp3"
      },
      {
        "id": 5,
        "Image": "assets/5.webp",
        "title": "Hello",
        "author": "Hello",
        "audio": ""
      },
      {
        "id": 6,
        "Image": "assets/6.webp",
        "title": "Hello",
        "author": "Hello",
        "audio": ""
      }
    ]

    this.Data=d.filter(((d:any)=>d.id==id))
    console.warn(this.Data);
    
    // this.api.getById(id).subscribe(res=>{
    //   this.Data = res
    // })
  }

}
