import * as index from '../index';
import rootReducer from '../rootReducer';
import rootEpic from '../rootEpic';

describe('root index', () => {
  it('should export rootReducer', () => {
    expect(index.rootReducer).toBe(rootReducer);
  });

  it('should export rootEpic', () => {
    expect(index.rootEpic).toBe(rootEpic);
  });
});