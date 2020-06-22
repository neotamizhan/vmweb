import { Component, OnInit } from '@angular/core';
import {EpisodeService} from '../episode.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  message = '';
  episodes: Episode[];

  constructor(private episodeService: EpisodeService) {}

  getEpisodes(): void {
    this.episodeService.getAllEpisodes()
    .subscribe(episodes => this.episodes = episodes);
  }

  ngOnInit() {
    this.getEpisodes();
  }



}
