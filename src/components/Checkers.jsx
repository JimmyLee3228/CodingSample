import React from 'react';
import { connect } from 'react-redux';
import { checkerIdsSelector } from '../reducers/ormSelectors';
import Checker from './Checker';

const mapState = (state) => ({
  checkerIds: checkerIdsSelector(state)
});

class Checkers extends React.Component {
  render() {
    const { checkerIds } = this.props;

    return (
      <React.Fragment>
        {checkerIds.map(checkerId => <Checker key={checkerId} id={checkerId} />)}
      </React.Fragment>
    );
  }
}

export default connect(mapState)(Checkers);
