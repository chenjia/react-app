import React from 'react';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';

const historyArray = [];
class AnimatedRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forward: true
    };
  }

  componentWillUpdate(props){
    if(this.props.location !== props.location){
      if(historyArray.length === 0){
        historyArray.push(props.location.pathname);
      }
      
      const back = historyArray.length > 1 && props.location.pathname === historyArray[historyArray.length-2];
      this.setState({
        forward: !back
      }, () => {
        if(this.state.forward){
          historyArray.push(props.location.pathname);
        }else{
          historyArray.pop();
        }
      });
    }
  }

  render() {
    if(historyArray.length === 0){
      historyArray.push(this.props.location.pathname);
    }
    
    return (
      <SwitchTransition>
        <CSSTransition classNames={this.state.forward?'forward':'back'} key={this.props.location.pathname} timeout={2000}>
          <div className={'transition-wrapper'} style={{width: this.props.screenWidth+'px', height: this.props.screenHeight+'px'}}>{this.props.children}</div>
        </CSSTransition>
      </SwitchTransition>
    )
  }
}

export default AnimatedRouter;