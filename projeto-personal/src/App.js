import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

const App = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
      <Sidebar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar} />
    </div>
  );
}

export default App;
