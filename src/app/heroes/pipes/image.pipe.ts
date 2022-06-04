import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( heroe: Heroe): string {
    if(!heroe.id){
      return `assets/no-image.png`;
    }
    return `assets/heroes/${ heroe.id }.jpg`;
  }

}
