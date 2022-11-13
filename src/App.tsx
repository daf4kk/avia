import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import AviaPage from './pages/AviaPage';
import {Navigate} from 'react-router-dom'
import AviaInfoPage from './pages/AviaInfoPage';
import { ITicket } from './types/ticket';
const App = () => {
  const [ticket, setTicket] = useState<ITicket | null>(null)
  console.log(ticket)
  return (
    <Routes>
      <Route path = '/' element = {<Navigate to = 'avia'></Navigate> }/>
      <Route path = '/avia' element = {ticket ? <Navigate to = '/avia/info'></Navigate> : <AviaPage setTicket = {setTicket}/>}/>
      <Route path = '/avia/info' element = {!ticket ? <Navigate to = '/avia'></Navigate>: <AviaInfoPage ticket = {ticket} setTicket = {setTicket}/>}/> 
    </Routes>
  );
};

export default App;