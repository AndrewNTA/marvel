import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import floor from 'lodash/floor';

import Banner from '../../components/banner';
import TableView from './components/TableView';
import Pagination from './components/Pagination';
import { fetchAllCharactersStart } from './actionsHome';

const PAGE_SIZE = 10;
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  componentDidMount() {
    const { listCharacters } = this.props.reducerHome;
    if (isEmpty(listCharacters)) {
      this.props.dispatchFetchAllCharacters(0);
    }
  }

  onPageChange(page) {
    const currentPage = floor(page);
    const offset = (currentPage - 1)*10;
    this.props.dispatchFetchAllCharacters(offset);
    this.setState({
      currentPage,
    });
  }


  handleDescription = (description) => {
    if(isEmpty(description)) {
      return 'None description';
    }
    if(description.length > 100) {
      const brefDescription = description.slice(0, 97);
      return `${brefDescription}...`;
    }
    return description;
  }

  handleClick = (id) => {
    const location = `${id}`;
    this.props.history.push(`/${location}`);
  }

  render() {
    const { listCharacters, loading, error, total } = this.props.reducerHome;
    const { currentPage } = this.state;
    const hasData = !isEmpty(listCharacters);
    const pageNumber = !(total % PAGE_SIZE)? floor(total/PAGE_SIZE): floor(total/PAGE_SIZE + 1);

    return (
      <div>
        <Banner/>
        <TableView
          loading={loading}
          error={error}
          listCharacters={listCharacters}
          handleClick={this.handleClick}
          handleDescription={this.handleDescription}
        />
        {hasData && <Pagination
          currentPage={currentPage}
          totalPages={pageNumber}
          onPageChange={this.onPageChange}
        />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducerHome: state.reducerHome
});

export const mapDispatchToProps = dispatch => ({
  dispatchFetchAllCharacters: (payload) => {
    dispatch(fetchAllCharactersStart(payload))
  }
});

export { Home as PureHome };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
