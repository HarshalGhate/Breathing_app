import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MelodiesapiService } from 'src/app/Services/Melodies/melodiesapi.service';
import { melodies } from '../melodies';
import { ActiveTrackDirective } from 'src/app/Directives/active-track.directive';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private apiMelodies: MelodiesapiService) { }

  MelodiesData: melodies[] = [];
  @ViewChildren(ActiveTrackDirective) activeTracks: QueryList<ActiveTrackDirective> | undefined;
  ngOnInit(): void {
    this.getAll();
    // this.getAllMixer();
  }
  panelOpenState = false;
  getAll() {
    this.MelodiesData =[
      {
        "id": 1,
        "title": "Bird",
        "audio": "assets/melodies_music/birds.mp3"
      },
      {
        "id": 2,
        "title": "Wind",
        "audio": "assets/melodies_music/wind.mp3"
      },
      {
        "id": 3,
        "title": "Rain",
        "audio": "assets/melodies_music/rain.mp3"
      },
      {
        "id": 4,
        "title": "Tornado",
        "audio": "assets/melodies_music/tornado.mp3"
      },
      {
        "id": 5,
        "title": "Lake",
        "audio": "assets/melodies_music/lake.mp3"
      },
      {
        "id": 6,
        "title": "Ocean",
        "audio": "assets/melodies_music/ocean.mp3"
      },
      {
        "id": 7,
        "title": "Snow",
        "audio": "assets/melodies_music/snow.mp3"
      },
      {
        "id": 8,
        "title": "Hazzard",
        "audio": "assets/melodies_music/hazzard.mp3"
      },
      {
        "id": 9,
        "title": "Water Fall",
        "audio": "assets/melodies_music/water_fall.mp3"
      },
      {
        "id": 10,
        "title": "Forest",
        "audio": "assets/melodies_music/Forest.mp3"
      },
      {
        "id": 11,
        "title": "Night",
        "audio": "assets/melodies_music/Night.mp3"
      },
      {
        "id": 12,
        "title": "Sand",
        "audio": "assets/melodies_music/Sand.mp3"
      }
    ]
    // this.apiMelodies.getAllMelodies().subscribe(res => {
    //   // this.MelodiesData = res
     
    //   // console.warn(this.MelodiesData);

    // })
  }

  // MixerData:melodies[]=[]
  // getAllMixer(){
  //   this.apiMelodies.getAllMixer().subscribe(res=>{
  //     this.MixerData=res;
  //   })
  // }
  audioElements: HTMLAudioElement[] = [];
  audioControls: { audio: HTMLAudioElement, label: string, volume: number }[] = [];

  // playTrack(track: melodies): void {
  //   const audio = new Audio(track.audio);
  //   audio.play();
  //   this.audioElements.push(audio);
  //   this.audioControls.push({ audio, label: track.title, volume: 0.5 });
  //   console.warn(this.audioControls);
    
  // }
  playTrack(track: { title: string, audio: string }): void {
    const existingControl = this.audioControls.find(control => control.label === track.title);

    if (existingControl) {
      // If the track is already playing, stop it
      this.stopTrack(existingControl.audio);
      this.audioControls = this.audioControls.filter(control => control.label !== track.title);
      this.audioElements = this.audioElements.filter(audio => audio !== existingControl.audio);
    } else {
      // If the track is not playing, play it
      const audio = new Audio(track.audio);
      audio.play();
      audio.volume = 0.5; // Set initial volume to 0.5
      this.audioElements.push(audio);
      this.audioControls.push({ audio, label: track.title, volume: 0.5 });
    }
  }

  stopTrack(audio: HTMLAudioElement): void {
    audio.pause();
    audio.currentTime = 0;
  }

  stopAll(): void {
    this.audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    this.audioElements = [];
    this.audioControls = [];
    this.deactivateAllTracks();
  }

  updateVolume(audio: HTMLAudioElement, event: any): void {
    const volume = event.value;
    audio.volume = volume;
  }

  private deactivateAllTracks(): void {
    this.activeTracks?.forEach(track => track.deactivate());
  }
}
