import Link from 'next/link'
import React from 'react'

const Blog = () => { 
   const blogs=[
  {
      id:1,
      title: "Blog 1",
      author: "Author 1",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim repellendus voluptas velit quas dolores veniam voluptates consequuntur esse nemo?"
    },
    {
      id:2,
      title: "Blog 2",
      author: "Author 2",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim repellendus voluptas velit quas dolores veniam voluptates consequuntur esse nemo?"
    },
    {
      id:3,
      title: "Blog 3",
      author: "Author 3",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim repellendus voluptas velit quas dolores veniam voluptates consequuntur esse nemo?"
    },
  ]

  return (
  
    <div className="">
      <ul className='flex justify-evenly items-center my-7'>
        {
          blogs.map(blog => (
            <li key={blog.id}>
              
             <Link href={`/blog/${blog.id}`}>
            {blog.title}</Link>

            </li>
            ))
        }
      </ul>
        
    </div>
  )
}

export default Blog