import React from 'react';
import { NavBar } from 'antd-mobile';
import AnimatedRouter from '../components/ui/AnimatedRouter';
import utils from '../utils'
import login from './login';
import home from './home';
import list from './list';

setTimeout(() => {
  import(/* webpackChunkName: "lazyLibs" */ '../lazyLibs')
}, window.Config.preload)

window.utils = utils;

const routes = [
  ...login,
  ...home,
  ...list,
];

const Router = require('react-router-dom').HashRouter;
const Route = require('react-router-dom').Route;
const Redirect = require('react-router-dom').Redirect;
const Switch = require('react-router-dom').Switch;

class Routers extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.mixin = {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  }

  render(){
    return (
      <Router>
        <Route render={({ location, match }) => {
          return (
            <React.Fragment>
              <NavBar mode="dark" style={{position:'absolute',top:0,width:'100%',zIndex:-1}}></NavBar>
              <AnimatedRouter location={location} {...this.mixin}>
                <Switch location={location}>
                  <Route key="/" exact path="/" render={() => (<Redirect to="/login" />)} />
                  {routes.map((route, i) => (
                    <Route
                    key={i}
                    path={route.path}
                    render={props => {
                      if(route.preload && !route.load && location.pathname === route.path){
                        route.load = true;
                        setTimeout(()=>{
                          route.preload.forEach((item) => {
                            item();
                          });
                        }, window.Config.preload)
                      }

                      return (
                      <React.Suspense fallback={<i></i>}>
                        <route.component {...props} {...this.mixin} routes={route.routes} />
                      </React.Suspense>
                      )}}
                    />
                  ))}
                </Switch>
              </AnimatedRouter>
            </React.Fragment>
          )}}>
        </Route>
      </Router>
    )
  }
}

export default Routers;
