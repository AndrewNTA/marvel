import React from 'react';
import Image from 'react-bootstrap/Image';

const Banner = () => {
  return (
    <div className="container pt-4 bg-light">
      <div className="row">
        <Image className="col-md-12"
          src="http://4.bp.blogspot.com/-69askTHLB34/UzYEadoAO-I/AAAAAAAAGog/3f9gQ5QMBfs/s1600/marvelbanner.jpg"
          fluid
        />
      </div>
    </div>
  )
}

export default Banner;