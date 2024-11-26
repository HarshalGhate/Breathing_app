import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MelodiesapiService } from 'src/app/Services/Melodies/melodiesapi.service';
import { melodies } from '../melodies';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private apiMelodies: MelodiesapiService) { }

  MelodiesData: melodies[] = [];
  ngOnInit(): void {
    this.getAll();
    this.getAllMixer();
  }
  panelOpenState = false;
  getAll() {
    this.apiMelodies.getAllMelodies().subscribe(res => {
      this.MelodiesData = res
      // console.warn(this.MelodiesData);

    })
  }

  MixerData:melodies[]=[]
  getAllMixer(){
    this.apiMelodies.getAllMixer().subscribe(res=>{
      this.MixerData=res;
    })
  }
  isPlaying = false
  // @ViewChild('audioOption', { static: false }) audio: ElementRef | undefined;

  
  playAudio(e: any, data: melodies) {
    console.warn(data.audio);
    // console.warn("----",this.audio);
    

    this.isPlaying = !this.isPlaying
    if (this.isPlaying) {
      e.play();
      // this.audio?.nativeElement.play();
      // add mixer
      this.apiMelodies.addmixer(data).subscribe(res => {
        this.getAllMixer();
      })
    }
    else {
      e.pause();
      // remove mixer
      this.apiMelodies.removeMixer(data).subscribe(res => {
        this.getAllMixer();
      })
    }

  }

  
  

}
