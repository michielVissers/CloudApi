import { Component, OnInit } from '@angular/core';
import {SpotifyService, IMovieInfo} from '../service/spotify.service'

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers:[SpotifyService]
})
export class IdComponent implements OnInit {

  searchInput:string;

  movieInfo: IMovieDisplay;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchSpotify(){
    //console.log(this.searchInput);
    this._spotifyService.searchSpotify(this.searchInput, "i").
    subscribe((result) => {
      console.table(result);
      this.movieInfo = {
        TitleView: result.Title,
        ReleasedView: result.Released,
        RuntimeView: result.Runtime,
        GenreView: result.Genre,
        DirectorView: result.Director,
        WriterView: result.Writer,
        ActorsView: result.Actors,
        PlotView: result.Plot,
        LanguageView: result.Language,
        CountryView: result.Country,
        AwardsView: result.Awards,
        imdbRatingView: result.imdbRating,
        posterView: result.Poster
      };
    }, (error) => {
      this.movieInfo = null;
    })
  }
}

export interface IMovieDisplay {
  TitleView: string;
  ReleasedView: string;
  RuntimeView: string;
  GenreView: string;
  DirectorView: string;
  WriterView: string;
  ActorsView: string;
  PlotView: string;
  LanguageView: string;
  CountryView: string;
  AwardsView: string;
  imdbRatingView: string;
  posterView: string;
}
