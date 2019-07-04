import React from 'react';
import { NavBar } from 'antd-mobile';

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
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i className={'fa fa-user'} />)}
          rightContent={(<i className={'fa fa-user'} />)}
        >首页</NavBar>
        <div onClick={() => {this.props.history.push('./setting')}}>to setting 1234567890</div>
      </div>
    );
  }
}

export default Home;