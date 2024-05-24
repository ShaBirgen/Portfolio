import Button from './Button'
import './Home.scss'
import Profile from '../assets/Birgen.png'

function Home() {
  return (
    <div className='mainHome'>
      <div className="mainLeft">
        <h3>Hello!</h3>
        <p>I'm Sharon Cherotich Birgen</p>
        <h2>Quality Assurance Engineer</h2>
        <div className="buttons">
        <Button msg= 'Hire Me'/>
        <Button msg='My Work'/>
        </div>
      </div>

      <div className="mainRight">
        <img className='profile' src={Profile} alt="profile" />
      </div>
    </div>
  )
}

export default Home
