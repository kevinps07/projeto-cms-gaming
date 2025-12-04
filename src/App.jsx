import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import List from './components/List'
import AdminLayout from './components/AdminLayout'

function App(){

  return (
      <div className='bg-midnight text-white w-screen h-screen'>
            <AdminLayout />
      </div>
  )
}

export default App;
