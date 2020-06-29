import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode.service';
import { FilteredTagsPipe } from '../filtered-tags-pipe';
import { strictEqual } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags-panel',
  templateUrl: './tags-panel.component.html',
  styleUrls: ['./tags-panel.component.scss']
})
export class TagsPanelComponent implements OnInit {

  tags = [];
  tagSearch = '';
  searchTags = [];
  constructor(
    private episodeService: EpisodeService,
    private router: Router
    ) { }

  ngOnInit() {
    this.tags = this.episodeService.getTagCount();
  }

  addToSearchTags(tag: string): void {
    if (!this.searchTags.includes(tag)) {
      this.searchTags.push(tag);
    }
    this.router.navigateByUrl('/tag/' + this.searchTags.join(','));
  }

  removeSearchTag(tag: string): void {
    if (this.searchTags.includes(tag)) {
      this.searchTags = this.searchTags.filter(t => t !== tag);
    }
    this.router.navigateByUrl('/tag/' + this.searchTags.join(','));
  }

  clearSearchTags(): void {
    this.searchTags = [];
    this.router.navigateByUrl('/tag/' + this.searchTags.join(','));
  }
}
