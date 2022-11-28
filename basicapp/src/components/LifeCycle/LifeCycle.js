/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'World!' };

    console.log('LifeCycle constructor started');
  }

  UNSAFE_componentWillMount() {
    console.log('LifeCycle will Mount');
  }

  componentDidMount() {
    console.log('LifeCycle did Mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  changeState() {
    this.setState({ hello: 'Geek!' });
  }

  render() {
    return (
      <div className="col-sm-8">
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a className="btn btn-outline-info" onClick={this.changeState.bind(this)}>
            Press Here!
          </a>
        </h2>
      </div>
    );
  }
}

export default LifeCycle;
