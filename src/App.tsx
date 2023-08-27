import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Layout/Navbar';
import Info from './Pages/info';
import RaffleCollection from './Pages/raffleCollection';
import Dashboard from './Pages/dashboard';
import Profile from './Pages/profile';
import WinnerTable from './Pages/winnerTable';
import Landing from './Pages/landing';
import Footer from './Component/Layout/Footer/index';

import './App.css';

function App() {
  return (
    <div className='bg-black flex flex-col items-center justify-center'>
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/dashboard1' element={<RaffleCollection />} />
          <Route path='/dashboard2' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/winner-table' element={<WinnerTable />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Footer /> */}
    </div>
  );
}

export default App;
