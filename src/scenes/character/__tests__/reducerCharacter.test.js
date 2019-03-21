import reducerCharacter from '../reducerCharacter';
import {
  FETCH_CHARACTER_DETAIL_START,
  FETCH_CHARACTER_DETAIL_SUCCESS,
  FETCH_CHARACTER_DETAIL_ERROR
} from '../actionsTypeCharacter';

describe('Character reducer', () => {
  const initialState = {
    loading: false,
    characterDetail: {},
    error: ''
  };

  describe('Initial reducer', () => {
    it('should return initial state when handle action type unexpected', () => {
      const action = {
        type: 'action_unexpected',
      };

      const resultState = reducerCharacter(undefined, action);

      expect(resultState).toEqual(initialState);
    });
  });

  describe('FETCH_CHARACTER_DETAIL', () => {
    it('should set loading state is true when start fetch character detail', () => {
      const payload = 'id_123';
      const action = {
        type: FETCH_CHARACTER_DETAIL_START,
        payload
      };

      const resultState = reducerCharacter(initialState, action);
      const expectedState = {
        loading: true,
        characterDetail: {},
        error: ''
      };

      expect(resultState).toEqual(expectedState);
    });

    it('should handle correctly when fetch character detail success', () => {
      const response = {
        data: {
          results: [
            {id: 'id_123'}
          ]
        }
      };
      const action = {
        type: FETCH_CHARACTER_DETAIL_SUCCESS,
        response,
      };

      const resultState = reducerCharacter(initialState, action);
      const expectedState = {
        loading: false,
        characterDetail: { id: 'id_123'},
        error: ''
      };

      expect(resultState).toEqual(expectedState);
    });

    it('should handle correctly when fetch character detail error', () => {
      const error = {
        message: 'has an error'
      };
      const action = {
        type: FETCH_CHARACTER_DETAIL_ERROR,
        error,
      };

      const resultState = reducerCharacter(initialState, action);
      const expectedState = {
        loading: false,
        characterDetail: {},
        error: 'has an error'
      };

      expect(resultState).toEqual(expectedState);
    });
  });
})