import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import AnimatedRouter from '../components/common/AnimatedRouter';
import login from './login';
import home from './home';

const routes = [
  ...login,
  ...home,
];

const Router = require('react-router-dom').HashRouter;
const Route = require('react-router-dom').Route;
const Redirect = require('react-router-dom').Redirect;
const Switch = require('react-router-dom').Switch;

const mapStateToProps = state => {
  return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
    header: hasHeader => {
      dispatch({type:'UI/HERADER', ui: {header:hasHeader}})
    },
    login: user => {
      dispatch({type: 'APP/LOGIN', app: {user:user}})
    }
  }
}

class Routers extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.mixin = {
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      back(){
        props.history.goBack();
      },
      go(url, state){
        props.history.push({pathname: url,state: state});
      }
    }
  }

  componentDidMount() {
    
  }

  render(){
    const historyArray = [];
    

    return (
      <Router>
        <Route render={({ location, match }) => {
          let forward = true;
          if(historyArray.length === 0){
            historyArray.push(location.pathname);
          }
          if(historyArray.length > 1 && location.pathname === historyArray[historyArray.length-2]){
            forward = false;
          }else{
            forward = true;
          }

          return (
            <AnimatedRouter location={location}>
              <Switch location={location}>
                {routes.map((route, i) => (
                  <Route
                  key={i}
                  path={route.path}
                  render={props => (
                    <Suspense fallback={<div>Loading...</div>}>
                    <route.component {...props} routes={route.routes} />
                    </Suspense>
                    )}
                  />
                ))}
              </Switch>
            </AnimatedRouter>
          )}}>
        </Route>
      </Router>
    )
  }
}

export default Routers;
