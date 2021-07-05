import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {
  transform(value: string, lengthLimit: number): string {
    return value.trim().slice(0, lengthLimit) + '...';
  }
}
