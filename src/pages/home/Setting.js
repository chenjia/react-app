import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div style={{background:'yellow', height: '900px'}}>
        <div onClick={() => {this.props.history.push('./login')}}>to login 1234567890</div>
      </div>
    );
  }
}

export default Home