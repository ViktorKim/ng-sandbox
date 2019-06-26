import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string, type?: string): string {
    let link = value;
    if (type === 'relative') {
      link = link.replace(environment.domainUrl, '');
    }
    return link;
  }

}
