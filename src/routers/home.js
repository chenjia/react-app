import React from 'react';

export default [{
  path: '/home',
  component: React.lazy(()=>import(/* webpackChunkName: "home" */ '../pages/home/Home')),
},{
  path: '/setting',
  component: React.lazy(()=>import(/* webpackChunkName: "setting" */ '../pages/home/Setting'))
}];
