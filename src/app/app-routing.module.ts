import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { EpisodesByTagComponent } from './episodes-by-tag/episodes-by-tag.component';
import { AppComponent } from './app.component';
import { EpisodesBySectionComponent } from './episodes-by-section/episodes-by-section.component';


const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'novel/:novelno/section/:sectionno', component: EpisodesBySectionComponent },
  { path: 'tag/:tag', component: EpisodesByTagComponent },
  { path: 'latest', component: LatestEpisodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
