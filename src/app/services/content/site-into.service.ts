import {Injectable} from '@angular/core';
import {Api} from '../../utils/Api';
import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

export interface ISiteInfo {
  description: string;
  name: string;
  home: string;
  gmt_offset: string;
}

@Injectable({
  providedIn: 'root'
})
export class SiteIntoService {

  api: Api;

  constructor() {
    this.api = new Api();
  }

  static fetchSiteInfo(): Observable<AjaxResponse> {
    return Api.fetch();
  }

}
