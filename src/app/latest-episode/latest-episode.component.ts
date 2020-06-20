import { Component, OnInit } from '@angular/core';
import {EpisodeService} from '../episode.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-latest-episode',
  templateUrl: '../episodes/episodes.component.html',
  styleUrls: ['../episodes/episodes.component.scss']
})
export class LatestEpisodeComponent implements OnInit {

  message = '';
  episodes: Episode[];

  constructor(private episodeService: EpisodeService) {}

  getEpisodes(): void {
    this.episodes = this.episodeService.getLatestEpisode();
  }

  ngOnInit() {
    this.getEpisodes();
  }

}
