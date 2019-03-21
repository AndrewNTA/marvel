import * as reducer from '../rootReducer';

describe('rootReducers', () => {
  it('should export default combineReducers', () => {
    expect(reducer.default).toBeDefined();
  });
});