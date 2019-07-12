import React from 'react';

export default [{
  path: '/list',
  component: React.lazy(()=>import(/* webpackChunkName: "list" */ '../pages/list/List'))
}];

