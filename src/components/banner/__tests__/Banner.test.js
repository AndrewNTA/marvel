import React from 'react';
import { shallow } from "enzyme";
import Image from 'react-bootstrap/Image';
import Banner from '../Banner';

describe('Banner', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Banner/>);
  });
  it('should render an Image when create a Banner', () => {
    const image = wrapper.find(Image);

    expect(image).toHaveLength(1);
  });
});