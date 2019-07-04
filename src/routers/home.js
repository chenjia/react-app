import React from 'react';

export default [{
  path: '/home',
  component: React.lazy(()=>import(/* webpackChunkName: "home" */ '../pages/home/Home')),
  preload: () => import(/* webpackChunkName: "setting" */ '../pages/home/Setting')
},{
  path: '/setting',
  component: React.lazy(()=>import(/* webpackChunkName: "setting" */ '../pages/home/Setting'))
}];
