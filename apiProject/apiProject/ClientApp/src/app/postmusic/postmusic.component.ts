import { Component, OnInit } from '@angular/core';
import {MusicService, Imusic} from '../service/music.service';

@Component({
  selector: 'app-postmusic',
  templateUrl: './postmusic.component.html',
  styleUrls: ['./postmusic.component.css'],
  providers:[MusicService]
})
export class PostmusicComponent implements OnInit {

  titleSong:string;
  durationSong:string;
  artistId:number;

  constructor(private _musicService:MusicService) { }

  ngOnInit() {
  }

  postMusic(){
    console.log(this.titleSong);
    console.log(this.durationSong);
    console.log(this.artistId);
    this._musicService.postMusicAPI(this.titleSong,this.durationSong,this.artistId);
  }
}
