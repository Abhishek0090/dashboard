import { useState } from 'react'
import "./global.scss";
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';

function App() {

  const user = false;

  return (
    <>
      <div>{!user ? <Dashboard /> : <Auth />}</div>
    </>
  );
}

export default App
