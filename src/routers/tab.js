import React from 'react';

export default [{
  path: '/tab',
  component: React.lazy(()=>import(/* webpackChunkName: "tab" */ '../pages/tab/Tab'))
}];

