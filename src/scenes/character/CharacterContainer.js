import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/navbar';
import CharacterContent from './components/CharacterContent';
import { fetchCharacterDetailStart } from './actionsCharacter';

class CharacterContainer extends PureComponent {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.dispatchFetchCharacterDetail(id);
  }

  render() {
    const { characterDetail, loading, error } = this.props.reducerCharacter;
    return (
      <div>
        <Navbar/>
        <CharacterContent
          characterDetail={characterDetail}
          loading={loading}
          error={error}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reducerCharacter: state.reducerCharacter
});

export const mapDispatchToProps = dispatch => ({
  dispatchFetchCharacterDetail: (id) => {
    dispatch(fetchCharacterDetailStart(id))
  }
});

export { CharacterContainer as PureCharacterContainer}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);