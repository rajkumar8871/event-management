import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true,
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], key: string, query: string): any[] {
    if (!query) return data;
    return data.filter(f => f[key].toLowerCase().includes(query.toLowerCase()));
  }

}
