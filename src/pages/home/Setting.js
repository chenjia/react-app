import React from 'react';
import { NavBar } from 'antd-mobile';

class Setting extends React.Component {

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
          leftContent={(<i onClick={()=>this.props.history.push('./login')} className={'fa fa-fw fa-bars'} />)}
        >设置</NavBar>
        <div onClick={() => {this.props.history.push('./login')}}>to login 1234567890</div>
      </div>
    );
  }
}

export default Setting