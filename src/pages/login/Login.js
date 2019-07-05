import React from 'react';
import { NavBar,List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import styled,{ keyframes } from 'styled-components';

const utils = window.utils;

const borderMove = keyframes`
  from {}
  to {
    background-position: 0 -12px, 100% 12px, 12px 0, -12px 100%;
  }
`;

const Captcha = styled.div`
  position:absolute;
  top:4px;
  right:4px;
  padding:1px;
  background: linear-gradient(0deg, transparent 6px, #ccc 6px) repeat-y, linear-gradient(0deg, transparent 50%, #ccc 0) repeat-y, linear-gradient(90deg, transparent 50%, #ccc 0) repeat-x, linear-gradient(90deg, transparent 50%, #ccc 0) repeat-x;
  background-size: 1px 12px, 1px 12px, 12px 1px, 12px 1px;
  background-position: 0 0, 100% 0, 0 0, 0 100%;
  animation: ${borderMove} 1s infinite linear;
`;

const AppVersion = styled.div`
  position:absolute;
  width:100%;
  bottom:5px;
  color:gray;
  font-size:12px;
  text-align:center;
`;

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forward: false,
      model: {
        username: 'admin',
        password: 'admin'
      },
      base64Img: '',
      appVersion: window.Config.appVersion
    }
  }

  getCaptcha(){
    utils.http.post('/manage/user/captcha').then(response => {
      this.setState({
        base64Img: 'data:image/png;base64, '+response.data.body.data.base64Img,
        model: Object.assign({}, this.state.model, {
          captchaToken: response.data.body.data.captchaToken
        })
      })
    })
  }

  login(){
    this.props.form.validateFields((error, values) => {
      if (error) {
        console.log('error', error, values);
      } else {
        const model = this.props.form.getFieldsValue().model;
        model.captchaToken = this.state.model.captchaToken;
        utils.http.post('/manage/user/login', model).then(response => {
          if(response.data.body.data) {
            this.props.history.push('./home');
          }else{
            this.getCaptcha();
          }
        }, error => {
          alert('error');
          this.props.history.push('./home');
        });
      }
    });
  }

  componentDidMount(){
    console.log(this.props)
    this.getCaptcha();

    this.props.form.setFieldsValue({
      model:this.state.model
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i className={'fa fa-fw fa-home'} />)}
          rightContent={(<i className={'fa fa-fw fa-refresh'} />)}
        >react-app</NavBar>

        <div className={'pd-md center'} style={{backgroundColor:'white'}}>
          <img src="logo.jpg" style={{width:'50%'}} />
        </div>

        <List>
          <InputItem
            {...getFieldProps('model.username', {
              rules:[{
                required: true,
                message: '账号不能为空！',
              }]
            })}
            clear
            placeholder="请输入账号"
          >账　号</InputItem>
          <InputItem
            {...getFieldProps('model.password')}
            clear
            placeholder="请输入密码"
          >密　码</InputItem>
          <InputItem
            {...getFieldProps('model.captcha')}
            clear
            placeholder="请输入验证码"
            extra={(
              <Captcha>
                <img onClick={()=>this.getCaptcha()} src={this.state.base64Img} style={{width:'100px', height:'36px'}} />
              </Captcha>
            )}
          >验证码</InputItem>
        </List>
        <div className={'pd-lg'}>
          <Button onClick={()=>this.login()} type="primary">登　录</Button><WhiteSpace />
        </div>
        <AppVersion>版本号：{this.state.appVersion}</AppVersion>
      </div>
    );
  }
}

export default createForm()(Login)