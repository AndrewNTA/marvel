import React from 'react';
import { isEmpty } from 'lodash';
import Image from 'react-bootstrap/Image';

import Loading from '../../../components/loading';
import Error from '../../../components/error';
import './CharacterContent.css'

const CharacterContent = ({ characterDetail, loading, error }) => {
  if (loading) {
    return <Loading />
  }
  if (!isEmpty(error)) {
    return <Error message={error} />
  }
  if (isEmpty(characterDetail)) {
    return <p>No data</p>
  }
  const { thumbnail: { path, extension }, name, description,
    comics, series, stories, events, urls } = characterDetail;
  const srcImage = `${path}/portrait_uncanny.${extension}`;
  return (
    <div className="container bg-light text-left pt-5">
      <div className="row pt-4">
        <div className="col-md-6 col-lg-4">
          <Image src={srcImage} className="shadow p-3 mb-5 bg-white rounded"></Image>
        </div>
        <div className="col-md-6 col-lg-8">
          <h2>{name}</h2>
          <p>{description ? description : 'None description !!!'}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4>Commics:</h4>
          {isEmpty(comics.items) ? <p>None comics !!!</p> : <ul>
            {comics.items.map((d) => {
              return <li key={d.resourceURI}>{d.name}</li>;
            })}
          </ul>}
          <h4>Series:</h4>
          {isEmpty(series.items) ? <p>None series !!!</p> : <ul>
            {series.items.map((d) => {
              return <li key={d.resourceURI}>{d.name}</li>;
            })}
          </ul>}
          <h4>Stories:</h4>
          {isEmpty(stories.items) ? <p>None stories !!!</p> : <ul>
            {stories.items.map((d) => {
              return <li key={d.resourceURI}>{d.name}</li>;
            })}
          </ul>}
          <h4>Events:</h4>
          {isEmpty(events.items) ? <p>None events !!!</p> : <ul>
            {events.items.map((d) => {
              return <li key={d.resourceURI}>{d.name}</li>;
            })}
          </ul>}
          <h4>Reference link:</h4>
          {isEmpty(urls) ? <p>None reference links !!!</p> : <ul className="url-reference">
            {urls.map((d) => {
              return <li key={d.type}>{d.url}</li>;
            })}
          </ul>}
        </div>
      </div>
    </div>
  );
};

export default CharacterContent;