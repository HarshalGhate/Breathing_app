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
  
  Data:dataType|undefined;
  getByID(id:number){
    this.api.getById(id).subscribe(res=>{
      this.Data = res
    })
  }

}
