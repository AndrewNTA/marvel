import * as index from '../index';

import Banner from '../Banner';

describe('Banner index', () => {
  it('should export default Banner component', () => {
    expect(index.default).toBe(Banner);
  });
});