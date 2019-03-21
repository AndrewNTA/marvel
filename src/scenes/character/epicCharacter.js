import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FETCH_CHARACTER_DETAIL_START } from './actionsTypeCharacter';
import { fetchCharacterDetailSuccess, fetchCharacterDetailError } from './actionsCharacter';
import { KEY_STRING, URL_MARVEL_CHARACTERS } from '../../constants';

const fetchCharacterDetailEpic = action$ => action$.pipe(
  ofType(FETCH_CHARACTER_DETAIL_START),
  mergeMap(action => ajax.getJSON(`${URL_MARVEL_CHARACTERS}/${action.payload}?${KEY_STRING}`).pipe(
    map(response => fetchCharacterDetailSuccess(response)),
    catchError(error => of(fetchCharacterDetailError(error))
    ))
  )
);

export default fetchCharacterDetailEpic;