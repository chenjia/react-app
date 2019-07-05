import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const historyArray = [];
class AnimatedRouter extends React.Component {

  render() {
    let forward = true;
    if(historyArray.length === 0){
      historyArray.push(this.props.location.pathname);
    }
    
    if(historyArray.length > 1 && this.props.location.pathname === historyArray[historyArray.length-2]){
      forward = false;
    }else{
      forward = true;
    }

    if(forward){
      historyArray.push(this.props.location.pathname);
    }else{
      historyArray.pop();
    }

    return (
      <TransitionGroup className={'transition-wrapper'} childFactory={child => React.cloneElement(child,{classNames:  'absolute ' + (forward?'forward':'back')})}>
        <CSSTransition key={this.props.location.pathname} timeout={300}>
        <div style={{overflowY:'auto', height: this.props.screenHeight+'px'}}>{this.props.children}</div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default AnimatedRouter;