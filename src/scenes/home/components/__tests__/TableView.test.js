import React from 'react';
import { shallow } from "enzyme";
import Table from 'react-bootstrap/Table';

import TableView from '../TableView';
import Loading from '../../../../components/loading';
import Error from '../../../../components/error';

describe('TableView', () => {
  let wrapper;
  let props = {
    loading: false,
    error: '',
    listCharacters: [],
    handleClick: jest.fn(),
    handleDescription: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<TableView {...props} />);
  });
  it('should render an Loading when loading', () => {
    const currentProps = { ...props, loading: true };
    wrapper = shallow(<TableView {...currentProps} />);
    const loading = wrapper.find(Loading);

    expect(loading).toHaveLength(1);
  });

  it('should render an Error when have an error', () => {
    const currentProps = { ...props, error: 'error' };
    wrapper = shallow(<TableView {...currentProps} />);
    const error = wrapper.find(Error);

    expect(error).toHaveLength(1);
  });

  it('should render an Table when have data dont have item', () => {
    const table = wrapper.find(Table);

    expect(table).toHaveLength(1);
  });

  it('should render an Table when have data have item', () => {
    const dataListCharacters = [
      {
        id: '123',
        name: 'name_character',
        description:
          'some description',
        thumbnail:
        {
          path: 'path_thumbnail',
          extension: 'jpg'
        }
      }
    ];
    const currentProps = { ...props, listCharacters: dataListCharacters };
    wrapper = shallow(<TableView {...currentProps} />);
    const table = wrapper.find(Table);

    expect(table).toHaveLength(1);
  });
});