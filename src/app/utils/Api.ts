import {of} from 'rxjs';
import {ajax} from 'rxjs/internal-compatibility';
import {catchError, map} from 'rxjs/operators';

export class Api {
  private API_URL = '//loc.sandbox.com/wp-json';

  constructor() {
  }

  fetch(endpoint: string) {
    const url = this.API_URL + endpoint;
    return ajax(url).pipe(
      map(request => request),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );
  }
}

