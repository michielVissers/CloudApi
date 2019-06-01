import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { IdComponent } from './id/id.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { PostmusicComponent } from './postmusic/postmusic.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from "./auth/auth-service.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SpotifyComponent,
    IdComponent,
    LoginComponent,
    MusicComponent,
    PostmusicComponent,
    CallbackComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movie', component: SpotifyComponent},
      { path: 'id', component: IdComponent},
      { path: 'music', component: MusicComponent},
      { path: 'addmusic', component: PostmusicComponent},
      { path: 'login', component: LoginComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

