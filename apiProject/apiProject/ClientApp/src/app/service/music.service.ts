import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService {
  private musicSearchUrl: string;

  constructor(private _http:HttpClient) { 

  }

  searchMusicAPI(searchText:string){
    this.musicSearchUrl = 'http://localhost:51331/api/songs';
    return this._http.get<Imusic>(this.musicSearchUrl);
  }
}

export interface Imusic {
  id: number;
  title: string;
  duration: string;
  artistId: number;
  artist?: any;
}