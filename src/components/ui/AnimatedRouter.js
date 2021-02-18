import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const historyArray = [];
class AnimatedRouter extends React.Component {

  render() {
    let forward = true;
    if(historyArray.length === 0){
      historyArray.push(this.props.location.pathname);
    }

    if(historyArray.length === 0){
      historyArray.push(this.props.location.pathname);
    }
    
    const back = historyArray.length > 1 && this.props.location.pathname === historyArray[historyArray.length-2];
    forward = !back;
    if(forward){
      historyArray.push(this.props.location.pathname);
    }else{
      historyArray.pop();
    }

    console.log(historyArray)

    return (
      <TransitionGroup childFactory={child => React.cloneElement(child, {classNames: forward?'forward':'back'})}>
        <CSSTransition 
          key={this.props.location.pathname} 
          timeout={{
            enter:300,
            exit:150
          }}
          onEntering={node => {node.classList.add((forward?'forward':'back')+'-enter-active')}}
        >
          <div className={'transition-wrapper'} style={{width: this.props.screenWidth+'px', height: this.props.screenHeight+'px'}}>{this.props.children}</div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default AnimatedRouter;