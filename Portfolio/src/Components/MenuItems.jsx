import './MenuItems.scss'
import { Link } from 'react-router-dom'

const MenuItems=()=> {
    const menus=[
        {
            Title : 'Home',
            path: './Home'
        },
        {
            Title : 'About',
            path: './'
        },
        {
            Title : 'Resume',
            path: './'
        },
        {
            Title : 'Skills',
            path: './'
        },
        {
            Title : 'Project',
            path: './'
        },
        {
            Title : 'MyBlog',
            path: './'
        },
        {
            Title : 'Contact',
            path: './'
        }
    ]
  return (
    <div className='menus'>
      {menus.map((menu, index) => (
        <div className="menusitems" key={index}>
          <Link to={menu.path}>
            <span className='listitems'>{menu.Title}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
