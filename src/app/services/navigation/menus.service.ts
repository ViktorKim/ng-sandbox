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

  constructor() {
  }

  static fetchMenuByLocation(location: string): Observable<AjaxResponse> {
    return Api.fetch('/menus/v1/locations/' + location);
  }

}
