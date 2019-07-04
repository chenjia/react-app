import React from 'react';
import { NavBar } from 'antd-mobile';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i className={'fa fa-user'} />)}
          rightContent={(<i className={'fa fa-user'} />)}
        >设置</NavBar>
        <div onClick={() => {this.props.history.push('./login')}}>to login 1234567890</div>
      </div>
    );
  }
}

export default Home