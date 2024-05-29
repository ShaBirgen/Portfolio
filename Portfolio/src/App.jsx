import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Homepage from './Components/Homepage'
import MenuItems from './Components/MenuItems'

function App() {

  return (
    <div className='app'>
       <Navbar/>
      <div className="main">
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div> 
      
    </div>
  )
}

export default App
