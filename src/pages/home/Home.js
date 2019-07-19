import React from 'react';
import { Card, Carousel, NavBar, Steps } from 'antd-mobile';
import styled from 'styled-components';

const Step = Steps.Step;

const Grid = styled.table`
  width:100%;
  text-align:center;
  background:white;
  font-size:13px;
  border:none;
  border-collapse: collapse;
  td {
    height:64px;
    line-height: 20px;
    vertical-align:middle;
    border:1px solid #dfdfdf;
    width:25%;
    padding-top:5px;
  }
  td i{
    font-size:24px;
  }
`;

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      carouselImgs: [
        'static/img/banner/0.jpg',
        'static/img/banner/1.jpg',
        'static/img/banner/2.jpg',
        'static/img/banner/3.jpg',
        'static/img/banner/4.jpg',
      ],
      menus: [{
        name: '列表',
        icon: 'list',
        url: 'list'
      },{
        name: '选项卡',
        icon: 'folder',
        url: 'tab'
      },{
        name: '图表',
        icon: 'bar-chart',
        url: 'chart'
      },{
        name: '通讯录',
        icon: 'address-book-o',
        url: 'contact'
      },{
        name: '表单',
        icon: 'list-alt',
        url: 'form'
      },{
        name: '锁屏',
        icon: 'hand-o-up',
        url: 'lock'
      },{
        name: '加载',
        icon: 'spinner',
        url: 'loading'
      },{
        name: '视频',
        icon: 'video-camera',
        url: 'video'
      },{
        name: '日历',
        icon: 'calendar',
        url: 'calendar'
      },{
        name: '地图',
        icon: 'map',
        url: 'map'
      },{
        name: '弹窗',
        icon: 'window-restore',
        url: 'dialog'
      },{
        name: '聊天',
        icon: 'qq',
        url: 'chat'
      },{
        name: '上传',
        icon: 'upload',
        url: 'upload'
      },{
        name: '浏览器',
        icon: 'chrome',
        url: 'browser'
      },{
        name: '缩放',
        icon: 'arrows-alt',
        url: 'zoom'
      },{
        name: '流程图',
        icon: 'sitemap',
        url: 'workflow'
      },{
        name: '电子签名',
        icon: 'pencil-square-o',
        url: 'signature'
      },{
        name: '启动页',
        icon: 'ellipsis-h',
        url: 'splash'
      }],
      currentStep: 0,
      timelines: [{
        time:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date < new Date()
        })(),
        title:'会议',
        content:'部门早会',
        icon:'fa fa-microphone'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date < new Date()
        })(),
        title:'午饭',
        content:'员工食堂用餐',
        icon:'fa fa-cutlery'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date < new Date()
        })(),
        title:'下午茶',
        content:'放松一下心情',
        icon:'fa fa-coffee'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date < new Date()
        })(),
        title:'生日',
        content:'朋友生日，一起庆祝',
        icon:'fa fa-birthday-cake'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date < new Date()
        })(),
        title:'睡觉',
        content:'亲爱滴，晚安么么哒~',
        icon:'fa fa-moon-o'
      }]
    }
  }

  componentWillMount() {
    for (let i=0; i<this.state.timelines.length; i++) {
      const item = this.state.timelines[i];
      if (!item.history) {
        this.setState({
          currentStep: i
        });
        break;
      }
    }
  }

  componentDidMount(){
    console.log('home')

    setTimeout(() => {
      this.setState({
        ready: true
      });
    },500)
  }

  render() {
    const colors = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'];
    const trs = this.state.menus.map((menu, index) => {
      if (index % 4 === 0) {
        const tds = this.state.menus.map((menu, i) => {
          if (i >= index && i < index + 4) {
            return (<td key={i} onClick={() => this.props.history.push(menu.url)}>
              <div>
                <i className={'fa fa-'+menu.icon} style={{color:colors[i]}}></i><br/>
                <span>{menu.name}</span>
              </div>
            </td>)
          }
        });

        return (<tr key={index}>{tds}</tr>);
      }
    });

    console.log(trs)

    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i onClick={()=>this.props.history.push('./login')} className={'fa fa-fw fa-bars'} />)}
          rightContent={(<i onClick={()=>this.props.history.push('./login')} className={'fa fa-fw fa-qrcode'} />)}
        >首页</NavBar>
        
        <div style={{position:'relative'}}>
          <img src={this.state.carouselImgs[0]} alt="" style={{ display:'block', width: '100%', height: this.props.screenWidth*0.6+'px' }}/>
        
          {this.state.ready && (<Carousel
            autoplay={true}
            infinite
            style={{ position:'absolute', top:0, width: '100%', height: this.props.screenWidth*0.6+'px' }}
            dotStyle={{marginBottom:'10px', backgroundColor:'black', opacity: .5}}
            dotActiveStyle={{marginBottom:'10px', backgroundColor:'white', opacity: .8}}
          >
            {this.state.carouselImgs.map((val, i) => (
              <img
                alt=""
                key={i}
                src={val}
                style={{ width: '100%', height: this.props.screenWidth*0.6+'px' }}
              />
            ))}
          </Carousel>)}
        </div>

        <Grid><tbody>{trs}</tbody></Grid>

        <Card full>
          <Card.Header
          title={(<div style={{margin:'5px -5px', color:'#108ee9'}}><i className="fa fa-user"/> <span>日程安排</span></div>)}
          thumb=""
          />
          <Card.Body>
            <Steps current={this.state.currentStep}>
            {
              this.state.timelines.map((item, i) => (
                <Step key={i} title={item.title} icon={(<div style={{width:'26px', height:'26px', lineHeight:'20px', border:'1px solid '+(this.state.currentStep>=i?'#108ee9':'#ccc'), borderRadius:'50%'}}><i className={'font-lg '+item.icon} /></div>)} description={item.content} />
              ))
            }
            </Steps>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;