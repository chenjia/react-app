import React from 'react';
import { CSSTransition } from 'react-transition-group';

const utils = window.utils;

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
        this.props.history.push('/page/home');
      }else{
        this.getCaptcha();
      }
    }, error => {
      alert('error');
      this.props.history.push('/page/home');
    })
  }

  toggleForward(){
    this.setState({
      forward: !this.state.forward
    });
  }

  render() {
    return (
      <div style={{background:'red', height: '900px'}}>
        <div onClick={() => {this.props.history.push('./home')}}>to home 1234567890</div>
      </div>
    );
  }
}

export default Login