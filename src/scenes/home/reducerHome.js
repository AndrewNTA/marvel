import {
  FETCH_ALL_CHARACTERS_START,
  FETCH_ALL_CHARACTERS_SUCCESS,
  FETCH_ALL_CHARACTERS_ERROR
} from './actionsTypeHome';

const initialState = {
  loading: false,
  listCharacters: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS_START:
      return { ...state, loading: true };
    case FETCH_ALL_CHARACTERS_SUCCESS:
      {
        const { results, total } = action.response.data;
        return { ...state, loading: false, listCharacters: results, total, error: '' };        
      }
    case FETCH_ALL_CHARACTERS_ERROR:
      return { ...state, loading: false, error: action.error.message };
    default:
      return state;
  }
};