import {of} from 'rxjs';
import {ajax} from 'rxjs/internal-compatibility';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export class Api {
  static fetch(endpoint: string = '') {
    const url = environment.apiUrl + endpoint;
    return ajax(url).pipe(
      map(request => request),
      catchError(error => {
        return of(error);
      })
    );
  }
}

