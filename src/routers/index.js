import React from 'react';
import { connect } from 'react-redux';
import AnimatedRouter from '../components/ui/AnimatedRouter';
import utils from '../utils'
import login from './login';
import home from './home';

window.utils = utils;

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
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
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
    return (
      <Router>
        <Route render={({ location, match }) => {
          return (
            <AnimatedRouter location={location}>
              <Switch location={location}>
                <Route exact path="/" render={() => (<Redirect to="/login" />)} />
                {routes.map((route, i) => (
                  <Route
                  key={i}
                  path={route.path}
                  render={props => {
                    if(route.preload && !route.load && location.pathname === route.path){
                      route.load = true;
                      setTimeout(()=>{
                        route.preload();
                      }, window.Config.preload)
                    }

                    const Com = connect(mapStateToProps, mapDispatchToProps)(route.component);

                    return (
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <Com {...props} {...this.mixin} routes={route.routes} />
                    </React.Suspense>
                    )}}
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
