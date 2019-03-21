import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Error = ({ message }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>The reason: {message}</p>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Error;