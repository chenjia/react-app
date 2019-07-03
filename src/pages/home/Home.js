import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forward: true,
      username: 'admin',
      password: 'admin'
    }
  }

  register(){
    this.props.history.push('/register');
  }

  forgetPassword(){
    this.props.history.push('/forgetpassword')
  }

  login(){
    
  }
  render() {
    return (
      <div style={{background:'green', height: '900px'}}>
        <div onClick={() => {this.props.history.push('./login')}}>to login 1234567890</div>
      </div>
    );
  }
}

export default Home