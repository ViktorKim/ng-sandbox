import {Injectable} from '@angular/core';
import {Api} from '../../utils/Api';
import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

export interface Menu {
  term_id: 2;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  api: Api;
  menus$: Observable<AjaxResponse>;

  constructor() {
    this.api = new Api();
    this.menus$ = this.fetchMenus$();
  }

  private fetchMenus$() {
    return this.api.fetch('/menus/v1/menus');
  }

  getMenus() {
    return this.menus$;
  }
}
