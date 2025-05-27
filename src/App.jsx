import React from 'react';
import Main from './components/main/Main';
import './index.css'
import contextProvider from './context/Context.jsx';
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Main/>
    </>
  );
};

export default App;
