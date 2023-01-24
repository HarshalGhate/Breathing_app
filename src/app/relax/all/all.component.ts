import { Component, OnInit } from '@angular/core';
import { dataType } from 'src/app/home/home/data';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  data:dataType[]=[];
  getData(){
    this.api.get().subscribe(res=>{
      this.data=res;
    })
}

AddFav(data:dataType){
  this.api.addFavorite(data).subscribe(res=>{
    
  })
}

}
