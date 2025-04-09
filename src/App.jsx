import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Header/></div>
      <main className='min-h-screen  mx-auto px-4 py-6' >
        <Outlet/>
      </main>
      <div><Footer/></div>
    </>
  )
}

export default App
