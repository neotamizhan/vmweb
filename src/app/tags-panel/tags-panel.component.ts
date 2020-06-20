import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-tags-panel',
  templateUrl: './tags-panel.component.html',
  styleUrls: ['./tags-panel.component.scss']
})
export class TagsPanelComponent implements OnInit {

  tags: {};

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.tags = this.episodeService.getTagCount();
    console.log(this.tags);
  }

}
