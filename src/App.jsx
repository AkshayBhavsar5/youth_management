import { useState } from 'react'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Register from './components/Register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='px-2'>
      <Register/>
      <Login/>
      <Header/>
    </div>
    </>
  )
}

export default App
