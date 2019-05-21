import { Component, OnInit } from '@angular/core';
import {MusicService, Imusic} from '../service/music.service'

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers:[MusicService]
})
export class MusicComponent implements OnInit {

  searchInput:string;
  musicInfo:IMusicDisplay;

  constructor(private _musicService:MusicService) { }

  ngOnInit() {
  }

  searchMusic(){
    //console.log(this.searchInput);
    this._musicService.searchMusicAPI(this.searchInput).
    subscribe((result) => {
      console.table(result);
      this.musicInfo = {
        idView: result.id,
        titleView: result.title,
        durationView: result.duration,
        artistIdView: result.artistId
      };
    }, (error) => {
      this.musicInfo = null;
    })
  }
}

export interface IMusicDisplay {
  idView: number;
  titleView: string;
  durationView: string;
  artistIdView: number;
}