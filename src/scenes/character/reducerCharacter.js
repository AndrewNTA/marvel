import {
  FETCH_CHARACTER_DETAIL_START,
  FETCH_CHARACTER_DETAIL_SUCCESS,
  FETCH_CHARACTER_DETAIL_ERROR
} from './actionsTypeCharacter';

const initialState = {
  loading: false,
  characterDetail: {},
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_DETAIL_START:
      return { ...state, loading: true };
    case FETCH_CHARACTER_DETAIL_SUCCESS:
      return { ...state, loading: false, characterDetail: action.response.data.results[0] };
    case FETCH_CHARACTER_DETAIL_ERROR:
      return { ...state, loading: false, error: action.error.message };
    default:
      return state;
  }
};