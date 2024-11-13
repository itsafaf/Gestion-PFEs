import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'



function App() {

  return (
    <div>
      <Profile />
      <Login />
      <Dashboard />
    </div>
      
  )
}

export default App
