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

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forward: false,
      model: {
        username: 'admin',
        password: 'admin'
      },
      base64Img: ''
    }
  }

  componentWillMount(){
    this.getCaptcha();
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
    utils.http.post('/manage/user/login', this.model).then(response => {
      if(response.data.body.data) {
        this.props.go('./home');
      }else{
        this.getCaptcha();
      }
    }, error => {
      alert('error');
      this.props.go('./home');
    })
  }

  toggleForward(){
    this.setState({
      forward: !this.state.forward
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
        
        <div className={'pd-md center'}>
          <img src="logo.jpg" style={{width:'50%'}} />
        </div>

        <List>
          <InputItem
            {...getFieldProps('username', {
              initialValue:this.state.model.username
            })}
            clear
            placeholder="请输入账号"
          >账　号</InputItem>
          <InputItem
            {...getFieldProps('password', {
              initialValue:this.state.model.password
            })}
            clear
            placeholder="请输入密码"
          >密　码</InputItem>
          <InputItem
            {...getFieldProps('captcha', {
              initialValue:this.state.model.captcha
            })}
            clear
            placeholder="请输入验证码"
            extra={(
              <Captcha>
                <img onClick={()=>this.getCaptcha()} src={this.state.base64Img} style={{width:'100px', height:'36px'}} />
              </Captcha>
            )}
          >验证码</InputItem>
        </List>
        <div className={'pd-md'}>
          <Button onClick={()=>this.login()} type="primary">登　录</Button><WhiteSpace />
        </div>
      </div>
    );
  }
}

export default createForm()(Login)