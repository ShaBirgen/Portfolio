import './MenuItems.scss'

const MenuItems=()=> {
    const menus=[
        {
            Title : 'Home'
        },
        {
            Title : 'About'
        },
        {
            Title : 'Resume'
        },
        {
            Title : 'Skills'
        },
        {
            Title : 'Project'
        },
        {
            Title : 'MyBlog'
        },
        {
            Title : 'Contact'
        }
    ]
  return (
    <div className='menus'>
      {menus.map((menus, index)=> (
        <div className="menusitems">
            <span>{menus.Title}</span>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
