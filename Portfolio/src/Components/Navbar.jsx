import '../Components/Navbar.scss'
import MenuItems from './MenuItems'
import Birgen from '../assets/LogoB.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="name">
        <img className='photo' src={Birgen} alt="" srcset="" />
      </div>

      <div className="menuitems">
        <MenuItems/>
      </div>
    </div>
  )
}

export default Navbar
