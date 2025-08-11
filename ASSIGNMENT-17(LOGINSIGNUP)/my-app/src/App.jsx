// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import About from './Pages/About';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import useModal from './Hooks/useModal';
import { AuthProvider } from './Context/AuthContext';

function App() {
    const location = useLocation();
    const { isModal, backgroundLocation } = useModal();
    

  return (
    <AuthProvider>
    <Navbar/>
    <Routes location={isModal ? backgroundLocation : location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> 
    </Routes>

    {/* Modal overlay */}
    {isModal && (
        <Routes>
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      )}
    </AuthProvider>
  )
}

export default App