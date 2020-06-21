import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filteredTags' })
export class FilteredTagsPipe implements PipeTransform {
  transform(allTags: [string, number][], query: string) {
    return allTags.filter(tag => tag[0].includes(query));
  }
}
