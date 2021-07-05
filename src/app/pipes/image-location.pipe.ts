import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageLocation'
})
export class ImageLocationPipe implements PipeTransform {
  transform(value: string): string {
    return '../../../assets/img/' + value;
  }
}
