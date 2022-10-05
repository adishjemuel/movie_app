import React from "react"
import PropTypes from "prop-types"
import { hot } from 'react-hot-loader';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default hot(module)(HelloWorld);