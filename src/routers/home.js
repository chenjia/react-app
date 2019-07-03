import React from 'react';

export default [{
  path: '/home',
  component: React.lazy(()=>import('../pages/home/Home'))
}];

