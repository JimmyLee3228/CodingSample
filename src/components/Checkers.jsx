import React from 'react';
import { connect } from 'react-redux';
import { checkersSelector } from '../reducers/ormSelectors';
import Checker from './Checker';

const mapState = (state) => ({
  checkers: checkersSelector(state)
});

class Checkers extends React.Component {
  render() {
    const { checkers } = this.props;

    return (
      <React.Fragment>
        {checkers.map(checker => <Checker key={checker.id} id={checker.id} />)}
      </React.Fragment>
    );
  }
}

export default connect(mapState)(Checkers);
