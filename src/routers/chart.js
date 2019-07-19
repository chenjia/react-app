import React from 'react';

export default [{
  path: '/chart',
  component: React.lazy(()=>import(/* webpackChunkName: "chart" */ '../pages/chart/Chart'))
}];

