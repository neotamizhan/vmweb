import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episodes-by-tag',
  templateUrl: '../episodes/episodes.component.html',
  styleUrls: ['../episodes/episodes.component.scss']
})
export class EpisodesByTagComponent implements OnInit {

  message = '';
  episodes: Episode[];
  tag = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
    ) {}

  getEpisodes(): void {
    this.episodes = this.episodeService.getEpisodesByTag(this.tag);
  }

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag');
    this.getEpisodes();
  }

}
