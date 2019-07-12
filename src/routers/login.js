import React from 'react';

export default [{
  path: '/login',
  component: React.lazy(()=>import(/* webpackChunkName: "login" */ '../pages/login/Login')),
  preload: [
    () => import(/* webpackChunkName: "home" */ '../pages/home/Home'),
  ]
}];