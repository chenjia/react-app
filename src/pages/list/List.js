import React from 'react';
import { List, Modal, NavBar, PullToRefresh, SearchBar, SwipeAction } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListPage extends React.Component {

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
          rightContent={(<i onClick={()=>this.toggleSearch(true)} className={'fa fa-fw fa-search'} />)}
        >列表</NavBar>

        <Modal
          popup
          visible={this.state.modal}
          onClose={() => this.toggleSearch(false)}
          animationType="slide-down"
        >
          <List renderHeader={() => <div>搜索条件</div>} className="popup-list">
            <SearchBar placeholder="Search" maxLength={8} />
          </List>
        </Modal>

        <PullToRefresh
          damping={60}
          ref={el => this.ptr = el}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            setTimeout(() => {
              this.add(10);
              this.setState({
                refreshing: false
              });
            }, 1000);
          }}
        >
          <List className="list">
            {
              this.state.data.map((item, i) => (
              <SwipeAction
                key={i}
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                  {
                    text: (<span><i className="fa fa-fw fa-remove"></i> 删除</span>),
                    onPress: () => this.remove(i),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
              >
              <Item align="top" thumb="static/img/head_bg.jpg" >
                {item.name} <Brief>{item.random}</Brief>
              </Item>
              </SwipeAction>
              ))
            }
          </List>
        </PullToRefresh>
      </div>
    );
  }
}

export default ListPage;