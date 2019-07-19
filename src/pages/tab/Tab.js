import React from 'react';
import { NavBar, Tabs, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge text={'3'}>chrome</Badge> },
  { title: <Badge>firefox</Badge> },
  { title: <Badge dot>safari</Badge> },
  { title: <Badge>edge</Badge> },
];

class Tab extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      down: true,
      refreshing: false,
      height: this.props.screenHeight-44,
      data: []
    }
  }

  add(count) {
    let array = [];
    const length = array.length;
    for (let i = length; i < length+count; i++) {
      const item = {
        name:'标题'+i,
        random: Math.random()
      }
      array.push(item);
    }

    this.setState({
      data: array
    });
  }
  
  remove(index) {
    this.state.data.splice(index, 1)
    this.setState({
      data: this.state.data
    });
  }

  toggleSearch(flag) {
    this.setState({
      modal: flag
    });
  }

  componentDidMount(){
    this.add(10);
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i onClick={()=>this.props.history.push('./home')} className={'fa fa-fw fa-chevron-left'} />)}
        >选项卡</NavBar>

        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{textAlign: 'center',color: '#26a2ff', lineHeight: (this.props.screenHeight-50)+'px'}}>
            <i className="fa fa-chrome" style={{fontSize:'100px'}}></i>
          </div>
          <div style={{textAlign: 'center',color: '#26a2ff', lineHeight: (this.props.screenHeight-50)+'px'}}>
            <i className="fa fa-firefox" style={{fontSize:'100px'}}></i>
          </div>
          <div style={{textAlign: 'center',color: '#26a2ff', lineHeight: (this.props.screenHeight-50)+'px'}}>
            <i className="fa fa-safari" style={{fontSize:'100px'}}></i>
          </div>
          <div style={{textAlign: 'center',color: '#26a2ff', lineHeight: (this.props.screenHeight-50)+'px'}}>
            <i className="fa fa-edge" style={{fontSize:'100px'}}></i>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Tab;