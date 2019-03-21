import * as index from '../index';

import Error from '../Error';

describe('Error index', () => {
  it('should export default Error component', () => {
    expect(index.default).toBe(Error);
  });
});