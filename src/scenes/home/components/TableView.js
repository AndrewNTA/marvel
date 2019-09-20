import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import isEmpty from 'lodash/isEmpty';

import Error from '../../../components/error';
import Loading from '../../../components/loading';
import './TableView.css';

const TableView = ({ loading, error, listCharacters, handleClick, handleDescription }) => {
  if (loading) {
    return <Loading />
  }
  if (!isEmpty(error)) {
    return <Error message={error} />
  }
  return (
    <div className="container pt-4 bg-light">
      <div className="row">
        <div className="col-12">
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan="2">Description</th>
              </tr>
            </thead>
            <tbody>
              {
                listCharacters.map(character => {
                  const { id, name, description, thumbnail: { path, extension } } = character;
                  const characterDescription = handleDescription(description);
                  const srcImage = `${path}/portrait_small.${extension}`;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{characterDescription}</td>
                      <td className="thumbnail-character" onClick={() => handleClick(id)}>
                        <Image src={srcImage} thumbnail />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TableView;
