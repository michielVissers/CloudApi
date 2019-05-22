import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService {
  private musicSearchUrl: string;

  constructor(private _http:HttpClient) { 

  }

  searchMusicAPI(searchText:string){
    this.musicSearchUrl = 'http://localhost:51331/api/songs';
    return this._http.get<Imusic[]>(this.musicSearchUrl);
  }

  postMusicAPI(title:string, duration:string, artistId:number){
    this.musicSearchUrl = 'http://localhost:51331/api/songs';
    this._http.post('http://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: duration,
      artistId: artistId
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}

export interface Imusic {
  id: number;
  title: string;
  duration: string;
  artistId: number;
  artist: any;
}