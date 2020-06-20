import { Injectable } from '@angular/core';
import { Episode } from './episode';
import * as Enumerable from 'linq';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

   /* Init Helpers */
   getAllTags(db: Episode[]): string[]{
    console.log(db);
    let tags = [];
    db.map(e => e.tags).forEach(e => e.forEach(t => tags.push (t)));
    console.log(tags);
    return tags;
  }

  getTagCount(db: Episode[]) {
    const tags = this.getAllTags(db);

    const counts = {};

    tags.forEach(tag => counts[tag] = counts[tag] ? counts[tag] + 1 : 1);
    const arrayTags = Object.entries<number>(counts);

    arrayTags.sort((a, b) => b[1] - a[1]);
    return arrayTags;
  }
/*
  getNovels(db) {
      return Enumerable.from(db)
              .select(function(x) { return {"id" : x.novelno, "name" : x.novelname} })
              .distinct("$.id")
              .toArray();
  }

  getSections(db, novel) {
    return Enumerable.from(db)
              .where (function (x) { return x.novelno == novel.id})
              .select(function (x) { return {"novelno" : x.novelno, "id" : x.sectionno, "name" : x.sectionname} })
              .distinct("$.id")
              .toArray();
  }

  getEpisode(db, novel, chapter) {
    var e = Enumerable.from(db)
              .where (function (x) { return x.novelno == novel && x.chapter == chapter})
              .toArray();
    return (e.length > 0) ? e[0] : {};
  }

  getEpisodesByNovel(db, novel) {
    return Enumerable.from(db)
              .where (function (x) { return x.novelno == novel })
              .orderByDescending('$.chapter')
              .toArray();
  }

  getEpisodesByNovelAndSection(db, novel, section) {
    return Enumerable.from(db)
              // tslint:disable-next-line: triple-equals
              .where ( x => x.novelno == novel && x.sectionno === section )
              .toArray();
  }

  getEpisodesByTag(db, tag) {
    console.log('in getEpisodesByTag looking for tag ' + tag);
    return Enumerable.from(db)
                     .where ((x: Episode) => Enumerable.From(x.tags).Contains(tag))
                     .orderByDescending('$.novelno')
                     .thenByDescending('$.chapter')
                     .toArray();
  }
  */
}
