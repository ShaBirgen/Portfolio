import '../Components/Navbar.scss'
import MenuItems from './MenuItems'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="name">
        <h1>BIRGEN</h1>
      </div>

      <div className="menuitems">
        <MenuItems/>
      </div>
    </div>
  )
}

export default Navbar
