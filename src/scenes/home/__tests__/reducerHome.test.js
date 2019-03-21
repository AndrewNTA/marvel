import reducerHome from '../reducerHome';
import {
  FETCH_ALL_CHARACTERS_START,
  FETCH_ALL_CHARACTERS_SUCCESS,
  FETCH_ALL_CHARACTERS_ERROR
} from '../actionsTypeHome';

describe('Home reducer', () => {
  const initialState = {
    loading: false,
    listCharacters: [],
    error: ''
  };

  describe('Initial reducer', () => {
    it('should return initial state when handle action type unexpected', () => {
      const action = {
        type: 'action_unexpected',
      };

      const resultState = reducerHome(undefined, action);

      expect(resultState).toEqual(initialState);
    });
  });

  describe('FETCH_ALL_CHARACTERS', () => {
    it('should set loading state is true when start fetch all character', () => {
      const payload = 10;
      const action = {
        type: FETCH_ALL_CHARACTERS_START,
        payload
      };

      const resultState = reducerHome(initialState, action);
      const expectedState = {
        loading: true,
        listCharacters: [],
        error: ''
      };

      expect(resultState).toEqual(expectedState);
    });

    it('should handle correctly when fetch all character success', () => {
      const response = {
        data: {
          total: 10,
          results: [
            { id: 'id_123' }
          ]
        }
      };
      const action = {
        type: FETCH_ALL_CHARACTERS_SUCCESS,
        response,
      };

      const resultState = reducerHome(initialState, action);
      const expectedState = {
        loading: false,
        total: 10,
        listCharacters: [{ id: 'id_123' }],
        error: ''
      };

      expect(resultState).toEqual(expectedState);
    });

    it('should handle correctly when fetch all character error', () => {
      const error = {
        message: 'has an error'
      };
      const action = {
        type: FETCH_ALL_CHARACTERS_ERROR,
        error,
      };

      const resultState = reducerHome(initialState, action);
      const expectedState = {
        loading: false,
        listCharacters: [],
        error: 'has an error'
      };

      expect(resultState).toEqual(expectedState);
    });
  });
})