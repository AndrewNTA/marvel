import * as index from '../index';

import Navbar from '../NavbarApp';

describe('Navbar index', () => {
  it('should export default Navbar component', () => {
    expect(index.default).toBe(Navbar);
  });
});