import React from 'react';
import { shallow } from "enzyme";
import Image from 'react-bootstrap/Image';

import CharacterContent from '../CharacterContent';
import Loading from '../../../../components/loading';
import Error from '../../../../components/error';

describe('CharacterContent', () => {
  let wrapper;
  let props = {
    loading: false,
    error: '',
    characterDetail: {}
  }
  beforeEach(() => {
    wrapper = shallow(<CharacterContent {...props} />);
  });
  it('should render an Loading when loading', () => {
    const currentProps = { ...props, loading: true };
    wrapper = shallow(<CharacterContent {...currentProps} />);
    const loading = wrapper.find(Loading);

    expect(loading).toHaveLength(1);
  });

  it('should render an Error when have an error', () => {
    const currentProps = { ...props, error: 'error' };
    wrapper = shallow(<CharacterContent {...currentProps} />);
    const error = wrapper.find(Error);

    expect(error).toHaveLength(1);
  });

  it('should render an Image when do not have data', () => {
    const noData = <p>No data</p>;

    expect(wrapper.contains(noData)).toEqual(true);
  });

  it('should render detail of character when data have item', () => {
    const currentCharacterDetail = {
      id: '123',
      name: 'name_character',
      description: '',
      thumbnail: {
        path: 'path_thumbnail',
        extension: 'jpg'
      },
      comics: {
        items: []
      },
      series: {
        items: []
      },
      stories: {
        items: []
      },
      events: {
        items: []
      },
      urls: []
    };

    const currentProps = { ...props, characterDetail: currentCharacterDetail };
    wrapper = shallow(<CharacterContent {...currentProps} />);
    const image = wrapper.find(Image);

    expect(image).toHaveLength(1);
  });

  it('should render detail of character when data have item with fullfilled', () => {
    const currentCharacterDetail = {
      id: '123',
      name: 'name_character',
      description: 'description',
      thumbnail: {
        path: 'path_thumbnail',
        extension: 'jpg'
      },
      comics: {
        items: [
          {
            resourceURI: 'url',
            name: 'name'
          }
        ]
      },
      series: {
        items: [
          {
            resourceURI: 'url',
            name: 'name'
          }
        ]
      },
      stories: {
        items: [
          {
            resourceURI: 'url',
            name: 'name'
          }
        ]
      },
      events: {
        items: [
          {
            resourceURI: 'url',
            name: 'name'
          }
        ]
      },
      urls: [{
        url: 'url',
        type: 'type'
      }]
    };

    const currentProps = { ...props, characterDetail: currentCharacterDetail };
    wrapper = shallow(<CharacterContent {...currentProps} />);
    const image = wrapper.find(Image);

    expect(image).toHaveLength(1);
  });
});