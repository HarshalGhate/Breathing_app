import { Component,  OnInit  } from '@angular/core';
import { dataType } from 'src/app/home/home/data';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.css']
})
export class MyfavoriteComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllFavourite();
  }

  data:dataType[]=[]
  getAllFavourite(){
    this.api.getAllFavourite().subscribe(res=>{
      console.warn("res---",res);
      this.data=res
      
    })
  }

  removeCard(item:dataType){
    this.api.removeFavorite(item.id).subscribe(res=>{
      this.getAllFavourite()
    })
  }

  
  onAudioPlay(e:any)
  {
    console.warn(e);
    
    e.play();
  }

}
