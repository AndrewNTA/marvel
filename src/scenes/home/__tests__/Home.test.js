import React from 'react';
import { shallow } from "enzyme";

import Banner from '../../../components/banner';
import { fetchAllCharactersStart } from '../actionsHome';
import { PureHome, mapDispatchToProps } from '../Home';

describe('Home Component', () => {
  let wrapper;
  let props = {
    reducerHome: {
      loading: false,
      error: '',
      listCharacters: []
    },
    dispatchFetchAllCharacters: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<PureHome {...props} />);
  });

  it('should render a Banner when mounted', () => {
    const banner = wrapper.find(Banner);

    expect(banner).toHaveLength(1);
  });

  it('should call dispatchFetchAllCharacters when mounted and do not have data', () => {
    expect(props.dispatchFetchAllCharacters).toHaveBeenCalledWith(0);
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    let dispatchFunc;

    beforeEach(() => {
      dispatch = jest.fn();
      dispatchFunc = mapDispatchToProps(dispatch);
    });

    it('should dispatch fetchAllCharactersStart action when call dispatchFetchAllCharacters', () => {
      const payload = 10;
      dispatchFunc.dispatchFetchAllCharacters(payload);

      expect(dispatch).toHaveBeenCalledWith(fetchAllCharactersStart(payload));
    });
  });
});