import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MypipePipe implements PipeTransform {
  transform(value: string, genders: string): string {
    if (genders.toLowerCase() == 'male') return 'mr.' + value;
    else return 'miss.' + value;
  }
}
