import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episodes-by-novel',
  templateUrl: '../episodes/episodes.component.html',
  styleUrls: ['../episodes/episodes.component.scss']
})
export class EpisodesByNovelComponent implements OnInit {

  episodes: Episode[];
  novelno: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
    ) {}

  getEpisodes(): void {
    this.episodeService.getEpisodesByNovel(this.novelno)
    .subscribe(episodes => this.episodes = episodes);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.novelno = +params.get('novelno');
      this.getEpisodes();
    });
  }

}
