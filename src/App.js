import React from 'react';
import './App.scss';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
