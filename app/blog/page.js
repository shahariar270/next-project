
import getPosts from '@/lib/posts';
import Link from 'next/link'
import React from 'react'

export default async function Blogs() {
  const posts= await getPosts()

  return (
    <div>
      <h1 className='my-7'>Blogs</h1>
      <ul className='m-7'>
        {
          posts.map(post=>(
            <li className='my-3' key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
