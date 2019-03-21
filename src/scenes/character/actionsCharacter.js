import {
  FETCH_CHARACTER_DETAIL_START,
  FETCH_CHARACTER_DETAIL_SUCCESS,
  FETCH_CHARACTER_DETAIL_ERROR
} from './actionsTypeCharacter';

const fetchCharacterDetailStart = (payload) => ({
  type: FETCH_CHARACTER_DETAIL_START,
  payload
});

const fetchCharacterDetailSuccess = response => ({
  type: FETCH_CHARACTER_DETAIL_SUCCESS,
  response
});

const fetchCharacterDetailError = error => ({
  type: FETCH_CHARACTER_DETAIL_ERROR,
  error
});

export {
  fetchCharacterDetailStart,
  fetchCharacterDetailSuccess,
  fetchCharacterDetailError
};
