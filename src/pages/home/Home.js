import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forward: true,
      username: 'admin',
      password: 'admin'
    }
  }

  render() {
    return (
      <div style={{background:'green', height: '900px'}}>
        <div onClick={() => {this.props.history.push('./setting')}}>to setting 1234567890</div>
      </div>
    );
  }
}

export default Home;