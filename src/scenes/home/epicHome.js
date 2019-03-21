import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FETCH_ALL_CHARACTERS_START } from './actionsTypeHome';
import { fetchAllCharactersSuccess, fetchAllCharactersError } from './actionsHome';
import { KEY_STRING, URL_MARVEL_CHARACTERS } from '../../constants';

const fetchAllCharactersEpic = action$ => action$.pipe(
  ofType(FETCH_ALL_CHARACTERS_START),
  mergeMap(action => ajax.getJSON(`${URL_MARVEL_CHARACTERS}?orderBy=name&offset=${action.payload}&limit=10&${KEY_STRING}`).pipe(
    map(response => fetchAllCharactersSuccess(response)),
    catchError(error => of(fetchAllCharactersError(error))
    ))
  )
);

export default fetchAllCharactersEpic;