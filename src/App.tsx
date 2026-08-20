import React from 'react';
import { PublicLayout } from './layouts';
import { Home } from './pages';

const App: React.FC = () => {
  return (
    <PublicLayout>
      <Home />
    </PublicLayout>
  );
};

export default App;
