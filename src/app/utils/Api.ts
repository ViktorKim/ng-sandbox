import {of} from 'rxjs';
import {ajax} from 'rxjs/internal-compatibility';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export class Api {
  private API_URL = environment.apiUrl;

  constructor() {
  }

  fetch(endpoint: string) {
    const url = this.API_URL + endpoint;
    return ajax(url).pipe(
      map(request => request),
      catchError(error => {
        return of(error);
      })
    );
  }
}

