import './App.scss'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <div className="main">
      <Home/>
      </div>
    </div>
  )
}

export default App
