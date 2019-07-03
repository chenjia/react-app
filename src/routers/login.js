import React from 'react';

export default [{
  path: '/login',
  component: React.lazy(()=>import('../pages/login/Login'))
}];

