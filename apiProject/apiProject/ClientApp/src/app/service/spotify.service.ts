import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {
  private searchUrl: string;

  constructor(private _http:HttpClient) { 

  }

  searchSpotify(searchText:string, type='artist'){
    this.searchUrl = 'http://www.omdbapi.com/?apikey=84deed1&t='+searchText;
    return this._http.get<IMovieInfo>(this.searchUrl);
  }

}

export interface Rating {
  Source: string;
  Value: string;
}

export interface IMovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}


