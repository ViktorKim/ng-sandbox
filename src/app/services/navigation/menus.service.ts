import {Injectable} from '@angular/core';
import {Api} from '../../utils/Api';
import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

export interface IMenuItem {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class MenusService {

  api: Api;

  constructor() {
    this.api = new Api();
  }

  fetchMenuByLocation(location: string): Observable<AjaxResponse> {
    return this.api.fetch('/menus/v1/locations/' + location);
  }

}
