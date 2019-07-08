import React from 'react';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';

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
      <SwitchTransition>
        <CSSTransition classNames="forward" key={this.props.location.pathname} timeout={150}>
          <div className={'transition-wrapper'} style={{overflow:'hidden auto', width: this.props.screenWidth+'px', height: this.props.screenHeight+'px'}}>{this.props.children}</div>
        </CSSTransition>
      </SwitchTransition>
    )
  }
}

export default AnimatedRouter;