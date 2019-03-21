import React from 'react';
import { shallow } from "enzyme";
import Alert from 'react-bootstrap/Alert';
import Error from '../Error';

describe('Error', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      message: 'have an error'
    }
    wrapper = shallow(<Error {...props}/>);
  });
  it('should render an Alert when create a Error', () => {
    const alert = wrapper.find(Alert);

    expect(alert).toHaveLength(1);
  });
});