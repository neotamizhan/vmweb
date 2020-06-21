import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { EpisodesByTagComponent } from './episodes-by-tag/episodes-by-tag.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'latest', component: LatestEpisodeComponent },
  { path: 'tag/:tag', component: EpisodesByTagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
