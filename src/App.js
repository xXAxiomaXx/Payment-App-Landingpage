import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './Components/Pages/Main';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Checkout from './Components/Pages/Checkout';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
