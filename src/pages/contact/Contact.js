import React from 'react';
import { List, NavBar, SearchBar, Toast } from 'antd-mobile';
import styled from 'styled-components';
import pinyin from 'pinyin';

const Item = List.Item;
const Brief = Item.Brief;
const Contacts = styled.div`
  padding-right:24px;
  .am-list-extra {
    flex-basis: 150px!important;
  }
`;

const IndexList = styled.ul`
  list-style:none;
  position:fixed;
  top:75px;
  right:0;
  width:24px;
  padding-left: 0;
  border-left: 1px solid #ccc;
  background-color: white;
`;

const IndexItem = styled.li`
  height:22px;
  line-height:22px;
  text-align:center;
  font-size:12px;
`;

const getName = contact => {
  return contact.displayName || contact.name.formatted
};
const pinyinSort = contacts => {
  let arr = [].concat(contacts)
  let group = []
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  letters.forEach((item,i)=>{
    let current = []
    for(let j=arr.length-1;j>=0;j--){
      let contact = arr[j]
      let name = getName(contact).replace(/阿/g, '啊')
      if(name.substr(0,1).toUpperCase() === item){
        current.push(contact)
        arr.splice(j, 1)
        continue
      } else if(pinyin(name, {style: pinyin.STYLE_FIRST_LETTER,heteronym: true,segment: true})[0][0].substr(0,1).toUpperCase() === item) {
        current.push(contact)
        arr.splice(j, 1)
      }
    }

    if(current.length) {
      current.sort((a,b)=>{
        let displayNameA = getName(a)
        let displayNameB = getName(b)
        return displayNameA.charCodeAt() - displayNameB.charCodeAt()
      })
      group.push({group: item, items:current})
    }
  })
  return group
}

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      aliasList:['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      items: [{
        displayName: 'Aaron',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '阿毛',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Braden',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '宝宝',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Chapman',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '场地',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Dunn',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '到达',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Elliott',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '饿了么',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Found',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '非常',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Grant',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '搞饭',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Hall',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '哈哈',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Irish',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'items',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Johnson',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '就是',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'key',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '开始',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'left',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '勒夫',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '刘双龙',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '卢金龙',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Martin',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '蚂蜂',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Nelson',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '呢方式',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Osborne',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '哦哦',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Pierce',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '浦东',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Quinta',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '区分',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Rose',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '人格',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'String',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '顺风耳',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Turner',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '听歌',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Urian',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Uwe',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Vega',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Vance',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'White',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '网格',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Xena',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '幸福氛围',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'York',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '雨神',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Zenon',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '在发疯',
        phoneNumbers:[{value:'13333333333'}]
      }]
    }
  }

  filterContacts = () => {
    let result = []
    let items = pinyinSort(this.state.items)
    if(this.state.searchKey){
      for(let i=0;i<items.length;i++){
        let group = items[i]
        let groupItems = []
        for(let item of group.items){
          let name = getName(item)
          if(name.toLowerCase().indexOf(this.state.searchKey.toLowerCase())!=-1){
            groupItems.push(item)
          }
        }
        if(groupItems.length){
          result.push({group:group.group, items:groupItems})  
        }
      }
    }else{
      result = items
    }
    return result
  }

  goIndex = index => {
    this.refs.scroller.scrollTop = document.getElementById(index).offsetTop - 90;
    Toast.info((<span className="font-hg">{index}</span>), 1, ()=>{}, false);
  }

  onChange = value => {
    this.setState({
      searchKey: value
    });
  }

  componentDidMount(){
    
  }

  render() {
    const contacts = this.filterContacts();
    console.log(contacts)

    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i onClick={()=>this.props.history.push('./home')} className={'fa fa-fw fa-chevron-left'} />)}
        >联系人</NavBar>
        
        <SearchBar placeholder="输入姓名搜索" onChange={this.onChange}/>

        <Contacts ref="scroller" style={{height: (this.props.screenHeight-85)+'px', overflowY: 'auto'}}>
        {contacts.map((item, index) => (
          <List id={item.group} key={index} renderHeader={() => item.group} style={{backgroundColor:'#fafafa'}}>
          {item.items.map((item, index) => (
            <Item key={index} extra={<span style={{width:'200px'}}>{item.phoneNumbers[0].value} <i className="fa fa-fw fa-phone" /></span>}>{item.displayName}</Item>
          ))}
          </List>
        ))}
        </Contacts>

        <IndexList>
        {this.state.aliasList.map((item, index) => (
          <IndexItem onClick={() => this.goIndex(item)} key={index}>{item}</IndexItem>
        ))}
        </IndexList>
      </div>
    );
  }
}

export default Contact;