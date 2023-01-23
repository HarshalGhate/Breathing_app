import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { melodies } from 'src/app/melodies/melodies';

@Injectable({
  providedIn: 'root'
})
export class MelodiesapiService {

  constructor(private http:HttpClient) { }

  public API_URL="http://localhost:3000/"
  getAllMelodies(){
    return this.http.get<melodies[]>(this.API_URL+`Melodies`)
  }

  getAllMixer(){
    return this.http.get<melodies[]>(this.API_URL+`Mixer`)
  }

  addmixer(data:melodies){
    return this.http.post<melodies>(this.API_URL+`Mixer`,data)
  }

  removeMixer(data:melodies){
    return this.http.delete(this.API_URL+`Mixer/${data.id}`)
  }
}
