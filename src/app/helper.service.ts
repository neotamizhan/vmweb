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
    // console.log('in getEpisodesByTag looking for tag ' + tag);
    // return db.filter((v: Episode, i: number) => v.tags.includes(tag))
    //           .sort((a, b) => b.novelno - a.novelno)
    //           .sort((a, b) => b.chapter - a.chapter);

    return this.getEpisodesByMultipleTags(db, tag);
  }

  getEpisodesByMultipleTags(db: Episode[], tags: string): Episode[] {
    console.log('in getEpisodesByTag looking for tags ' + tags);
    const sTags = tags.split(',');

    return (tags.trim().length > 0)
              ?
                  db.filter((v: Episode, i: number) => sTags.every(t => v.tags.includes(t)))
                    .sort((a, b) => b.novelno - a.novelno)
                    .sort((a, b) => b.chapter - a.chapter)
              :
                  [];
  }

  getNovels(db: Episode[]) {
    const novels = [];

    db.forEach(e => {
      const novel = {id: e.novelno, name: e.novelname};
      if (!novels.find(n => n.name === novel.name)) { novels.push({id: e.novelno, name: e.novelname})}
    });

    return novels;
  }

  getSections(db: Episode[], novel: {id: number, novelname: string}) {
    const sections = [];

    const novels = db.filter(n => n.novelno === novel.id);

    novels.forEach(n => {
      const section = {novelno: n.novelno, id: n.sectionno, sectionname: n.sectionname};
      if (!sections.find(s => s.sectionname.replace(/\s/g, '') === section.sectionname.replace(/\s/g, ''))) { sections.push(section); }
    });
    return sections;
  }

  getNovelsWithSections(db: Episode[]) {
      const novelsWithSections = [];

      this.getNovels(db).forEach(n => {
          const novelWithSections = {novel : {id: 0, name: ''}, sections: []};
          novelWithSections.novel = n;
          novelWithSections.sections = this.getSections(db, n);
          novelsWithSections.push (novelWithSections);
        }
      );

      return novelsWithSections;
  }

  getEpisodesByNovelAndSection(db: Episode[], novelno: number, sectionno: number) {
    return db.filter(n => n.novelno === novelno && n.sectionno === sectionno);
  }

  getEpisodesByNovel(db: Episode[], novelno: number) {
    return db.filter(n => n.novelno === novelno).sort((a, b) => a.chapter - b.chapter);
  }
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
