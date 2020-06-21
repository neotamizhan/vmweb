import { Injectable } from '@angular/core';
import {Episode} from './episode';
import * as data from '../../data.json';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  episodes: Episode[];

  constructor(private helperService: HelperService) {
    this.episodes = (data as any).default;
  }

  getAllEpisodes(): Episode[] {
    return this.episodes;
  }

  getLatestEpisode(): Episode[] {
    let e = [];
    e.push(this.episodes[this.episodes.length - 1]);
    return e;
  }

  getAllTags(): any[] {
    return this.helperService.getAllTags(this.episodes);
  }

  getTagCount() {
    return this.helperService.getTagCount(this.episodes);
  }

  getEpisodesByTag(tag: string): Episode[] {
    return this.helperService.getEpisodesByTag(this.episodes, tag);
  }

  getNovelsWithSections(){
    return this.helperService.getNovelsWithSections(this.episodes);
  }
}
