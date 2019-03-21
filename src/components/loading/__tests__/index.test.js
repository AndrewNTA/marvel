import * as index from '../index';

import Loading from '../Loading';

describe('Loading index', () => {
  it('should export default Loading component', () => {
    expect(index.default).toBe(Loading);
  });
});