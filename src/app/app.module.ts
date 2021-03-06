import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { TagsPanelComponent } from './tags-panel/tags-panel.component';
import { NovelsBarComponent } from './novels-bar/novels-bar.component';
import { FilteredTagsPipe } from './filtered-tags-pipe';
import { EpisodesByTagComponent } from './episodes-by-tag/episodes-by-tag.component';
import { EpisodesBySectionComponent } from './episodes-by-section/episodes-by-section.component';
import { EpisodesByNovelComponent } from './episode-by-novel/episode-by-novel.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    LatestEpisodeComponent,
    TagsPanelComponent,
    NovelsBarComponent,
    FilteredTagsPipe,
    EpisodesByTagComponent,
    EpisodesBySectionComponent,
    EpisodesByNovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
