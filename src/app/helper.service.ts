import { Injectable } from '@angular/core';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

   /* Init Helpers */
   getAllTags(db: Episode[]): string[]{
    console.log(db);
    const tags = [];
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

  getEpisodesByTag(db: Episode[], tag: string): Episode[] {
    console.log('in getEpisodesByTag looking for tag ' + tag);
    return db.filter((v: Episode, i: number) => v.tags.includes(tag))
              .sort((a, b) => b.novelno - a.novelno)
              .sort((a, b) => b.chapter - a.chapter);
  }

  getNovels(db: Episode[]) {
    const novels = [];

    db.forEach(e=> novels.push({id: e.novelno, name: e.novelname}));
    return novels;
  }

  getSections(db: Episode[], novel: {id: number, novelname: string}) {
    const sections = [];

    db.filter(e=> e.novelno == novel.id)
      .forEach(n=> sections.push({novelno: n.novelno, id: n.sectionno, name: n.sectionname}));

    return sections;
  }

  getNovelsWithSections(db: Episode[]) {
      const novelsWithSections = [];
      
      this.getNovels(db).forEach(n=> {
          const novelWithSections = {novel : {id: 0, name: ''}, sections: []};
          novelWithSections.novel = n
          novelWithSections.sections = this.getSections(db,n);
          novelsWithSections.push (novelWithSections);
        }
      ); 
      
      return novelsWithSections;
    };      
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


  */
}
