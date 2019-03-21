import React from 'react';
import { shallow } from "enzyme";

import Navbar from '../../../components/navbar';
import { fetchCharacterDetailStart } from '../actionsCharacter';
import { PureCharacterContainer, mapDispatchToProps } from '../CharacterContainer';

describe('CharacterContainer', () => {
  let wrapper;
  let props = {
    reducerCharacter: {
      loading: false,
      error: '',
      characterDetail: {}
    },
    match: {
      params: {
        id: '123'
      }
    },
    dispatchFetchCharacterDetail: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<PureCharacterContainer {...props} />);
  });

  it('should render a Navbar when mounted', () => {
    const navbar = wrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  });

  it('should call dispatchFetchCharacterDetail when mounted', () => {
    expect(props.dispatchFetchCharacterDetail).toHaveBeenCalledWith('123');
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    let dispatchFunc;

    beforeEach(() => {
      dispatch = jest.fn();
      dispatchFunc = mapDispatchToProps(dispatch);
    });

    it('should dispatch fetchCharacterDetail action when call dispatchFetchCharacterDetail', () => {
      const payload = '123';
      dispatchFunc.dispatchFetchCharacterDetail(payload);

      expect(dispatch).toHaveBeenCalledWith(fetchCharacterDetailStart(payload));
    });
  });
});