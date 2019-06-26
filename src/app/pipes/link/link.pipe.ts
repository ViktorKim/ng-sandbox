import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string, type?: string): string {
    let link = new URL(value).href;
    const domainUrl = new URL(environment.domainUrl).href;
    if (type === 'relative') {
      link = link.replace(domainUrl, '');
    }
    return link;
  }

}
