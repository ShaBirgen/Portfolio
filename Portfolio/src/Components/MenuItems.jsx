import './MenuItems.scss'
import { Link } from 'react-router-dom'

const MenuItems=()=> {
    const menus=[
        {
            Title : 'Home',
            path: './'
        },
        {
            Title : 'About',
            path: './about'
        },
        // {
        //     Title : 'Resume',
        //     path: './resume'
        // },
        {
            Title : 'Skills',
            path: './skills'
        },
        {
            Title : 'Project',
            path: './project'
        },
        {
            Title : 'MyBlog',
            path: './MyBlog'
        },
        {
            Title : 'Contact',
            path: './Contacts'
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
