import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
// This pipe transforms a string to title case, capitalizing the first letter of each word.
