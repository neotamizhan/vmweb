import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Episode} from './episode';
import * as data from '../../data.json';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  episodes: Episode[];
  db: Episode[];

  constructor(private helperService: HelperService) {
    this.db = (data as any).default;
  }

  getAllEpisodes(): Observable<Episode[]> {
    return of(this.episodes);
  }

  getLatestEpisode(): Observable<Episode[]> {
    const e = [];
    e.push(this.db[this.db.length - 1]);
    return of(e);
  }

  getEpisodesByTag(tag: string): Observable<Episode[]> {
    return of(this.helperService.getEpisodesByTag(this.db, tag));
  }

  getEpisodesByNovel(novelno: number) {
    return of(this.helperService.getEpisodesByNovel(this.db, novelno));
  }

  getEpisodesByNovelAndSection(novelno: number, sectionno: number) {
    return of(this.helperService.getEpisodesByNovelAndSection(this.db, novelno, sectionno));
  }

  getNovelsWithSections() {
    return this.helperService.getNovelsWithSections(this.db);
  }

  getAllTags(): any[] {
    return this.helperService.getAllTags(this.db);
  }

  getTagCount() {
    return this.helperService.getTagCount(this.db);
  }


}
