import React from 'react';
import { shallow } from "enzyme";
import Loading from '../Loading';

describe('Loading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loading/>);
  });
  it('should render an spin when create a Loading', () => {
    const spin = <div className="spinner-border align-self-center" role="status" />;

    expect(wrapper.contains(spin)).toEqual(true);
  });
});