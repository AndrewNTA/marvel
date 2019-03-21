import React from 'react';
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{overflow: "scroll"}}>
          <UltimatePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Pagination;