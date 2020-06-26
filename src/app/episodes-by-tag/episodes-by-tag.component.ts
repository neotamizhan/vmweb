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
    this.episodeService.getEpisodesByTag(this.tag)
    .subscribe(episodes => this.episodes = episodes);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tag = params.get('tag');
      this.getEpisodes();
      this.message = 'குறிச்சொல் : ' + this.tag;
    });
  }

}
