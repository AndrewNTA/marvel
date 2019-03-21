import React from 'react';
import { shallow } from "enzyme";
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4';
import Pagination from '../Pagination';

describe('Pagination', () => {
  let wrapper;
  let props = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Pagination {...props}/>);
  });
  it('should render an UltimatePagination when create a Pagination', () => {
    const ultimatePagination = wrapper.find(UltimatePagination);

    expect(ultimatePagination).toHaveLength(1);
  });
});