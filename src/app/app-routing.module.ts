import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { EpisodesByTagComponent } from './episodes-by-tag/episodes-by-tag.component';
import { AppComponent } from './app.component';
import { EpisodesBySectionComponent } from './episodes-by-section/episodes-by-section.component';
import { EpisodesByNovelComponent } from './episode-by-novel/episode-by-novel.component';


const routes: Routes = [
  { path: '', redirectTo: 'latest',  pathMatch: 'full'},
  { path: 'latest', component: LatestEpisodeComponent },
  { path: 'novel/:novelno', component: EpisodesByNovelComponent },
  { path: 'novel/:novelno/section/:sectionno', component: EpisodesBySectionComponent },
  { path: 'tag/:tag', component: EpisodesByTagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
