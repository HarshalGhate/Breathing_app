import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataType } from '../Components/home/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  API_URL="http://localhost:3000/"

  get(){
    return this.http.get<dataType[]>(this.API_URL+`Data`)
  }

  getById(id:any){
    return this.http.get<dataType>(this.API_URL+`Data/${id}`)
  }

  addFavorite(data:dataType){
    return this.http.post<dataType>(this.API_URL+`Favorite`,data)
  }

  getAllFavourite(){
    return this.http.get<dataType[]>(this.API_URL+`Favorite`)
  }

  removeFavorite(id:number){
    return this.http.delete<dataType[]>(this.API_URL+`Favorite/${id}`)
  }

}
