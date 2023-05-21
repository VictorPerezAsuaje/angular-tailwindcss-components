import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeAndSeparate'
})

export class CapitalizeAndSeparatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) 
      return '';    

      const spacedString = value.replace(/([A-Z])/g, ' $1');
      const formattedString = spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
      return formattedString;
  }
}