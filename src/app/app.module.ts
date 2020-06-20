import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { TagsPanelComponent } from './tags-panel/tags-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    LatestEpisodeComponent,
    TagsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
