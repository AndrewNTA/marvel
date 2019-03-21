import * as epic from '../rootEpic';

describe('rootEpic', () => {
  it('should export default combineEpics', () => {
    expect(epic.default).toBeDefined();
  });
});