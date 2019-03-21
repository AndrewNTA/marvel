import React from 'react';
import { shallow } from "enzyme";
import Navbar from 'react-bootstrap/Navbar';
import NavbarApp from '../NavbarApp';

describe('Navbar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavbarApp/>);
  });
  it('should render an Navbar when create a NavbarApp', () => {
    const navbar = wrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  });
});