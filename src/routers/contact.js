import React from 'react';

export default [{
  path: '/contact',
  component: React.lazy(()=>import(/* webpackChunkName: "contact" */ '../pages/contact/Contact'))
}];

