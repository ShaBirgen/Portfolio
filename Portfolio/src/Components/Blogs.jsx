import './Blogs.scss'
import { useState } from 'react'


function Blogs() {
  const [blogs, setBlogs]= useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  return (
    <div className='main'>
      {blogs.map((blog)=>(
        <div className="article" key={blog.id}>
          <h1>{blog.title}</h1>
          <p><small>Written by: {blog.author}</small></p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Blogs
