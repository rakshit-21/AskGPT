import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/Main';
import './index.css'
import contextProvider from './context/Context.jsx';

const App = () => {
  return (
    <>
      <Sidebar />
      <Main/>
    </>
  );
};

export default App;
