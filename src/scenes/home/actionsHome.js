import {
  FETCH_ALL_CHARACTERS_START,
  FETCH_ALL_CHARACTERS_SUCCESS,
  FETCH_ALL_CHARACTERS_ERROR
} from './actionsTypeHome';

const fetchAllCharactersStart = payload => ({
  type: FETCH_ALL_CHARACTERS_START,
  payload
});

const fetchAllCharactersSuccess = response => ({
  type: FETCH_ALL_CHARACTERS_SUCCESS,
  response
});

const fetchAllCharactersError = error => ({
  type: FETCH_ALL_CHARACTERS_ERROR,
  error
});

export {
  fetchAllCharactersStart,
  fetchAllCharactersSuccess,
  fetchAllCharactersError
};
