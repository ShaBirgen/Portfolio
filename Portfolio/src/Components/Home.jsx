import Button from './Button'
import './Home.scss'
import Profile from '../assets/Birgen.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function Home() {
  return (
    <><div className="routes">
{/*       
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/home' element={<Homepage/>}/>
        </Routes> */}
    </div><div className='mainHome'>
        <div className="mainLeft">
          <h3>Hello!</h3>
          <p>I'm Sharon Cherotich Birgen</p>
          <h2>Quality Assurance Engineer</h2>
          <div className="buttons">
            <Button msg='Hire Me' />
            <Button msg='My Work' />
          </div>
        </div>

        <div className="mainRight">
          <img className='profile' src={Profile} alt="profile" />
        </div>
      </div></>
  )
}

export default Home
