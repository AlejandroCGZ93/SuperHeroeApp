import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';

import 'animate.css';

export const SuperHeroApp = () => {
  return (
   <>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>     
   </>
  )
}
