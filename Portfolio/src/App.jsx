import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MenuItems from './Components/MenuItems'
import About from './Components/About'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import MyBlogs from './Components/Blogs'
import Contacts from './Components/Contacts'
import Footer from './Components/footer'

function App() {

  return (
    <div className='app'>
       <Navbar/>
      <div className="main">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/MyBlog' element={<MyBlogs/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
      </div> 
      <Footer/>
    </div>
  )
}

export default App
