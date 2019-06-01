import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth-service.service';

@Injectable()
export class MusicService {
  private musicSearchUrl: string;

  constructor(public auth: AuthService, private _http:HttpClient) { 

  }

  searchMusicAPI(searchText:string){
    this.musicSearchUrl = 'http://localhost:51331/api/songs/filter/' + searchText;
    return this._http.get<Imusic[]>(this.musicSearchUrl, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }

  postMusicAPI(Title:string, Duration:string, ArtistId:number){
    this.musicSearchUrl = 'http://localhost:51331/api/songs';
    this._http.post(this.musicSearchUrl, {
      title: Title,
      duration: Duration,
      artist: {"Id" : ArtistId}
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
  artist: IArtist;
}

export interface IArtist {
  id: number;
  name: string;
  alias: string;
  born: string;
}