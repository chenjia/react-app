import React from 'react';
import { NavBar, Carousel, Grid, Steps } from 'antd-mobile';

const Step = Steps.Step;

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carouselImgs: [
        'static/img/banner/0.jpg',
        'static/img/banner/1.jpg',
        'static/img/banner/2.jpg',
        'static/img/banner/3.jpg',
        'static/img/banner/4.jpg',
      ],
      colors:['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'],
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
      timelines:[{
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

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i className={'fa fa-fw fa-bars'} />)}
          rightContent={(<i className={'fa fa-fw fa-qrcode'} />)}
        >首页</NavBar>

        <Carousel
          autoplay={true}
          infinite
          dotStyle={{marginBottom:'10px'}}
          dotActiveStyle={{marginBottom:'10px'}}
        >
          {this.state.carouselImgs.map((val, i) => (
            <img
              key={i}
              src={val}
              style={{ width: '100%', height: this.props.screenWidth*0.6+'px' }}
            />
          ))}
        </Carousel>

        <Grid 
          data={this.state.menus}
          activeStyle={false}
          square={false}
          renderItem={(menu, i) => (
            <div onClick={()=>this.props.history.push(menu.url)}>
              <i className={'fa fa-fw fa-'+menu.icon} style={{marginBottom:'5px', fontSize:'24px', color:this.state.colors[i]}}></i><br/>
              <span>{menu.name}</span>
            </div>
          )}
        />

        <div className={'pd-lg'}>
          <div className="sub-title">日程安排</div>
          <Steps current={1}>
          {
            this.state.timelines.map((item, i) => (
              <Step key={i} title={item.title} icon={(<i className={'font-lg '+item.icon} />)} description={item.content} />
            ))
          }
          </Steps>
        </div>
      </div>
    );
  }
}

export default Home;