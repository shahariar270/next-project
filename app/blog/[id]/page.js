import React from 'react'

export default function SinglePost({params}) {
  return (
    <div>
        <h1>Single Post</h1>
        <p>{params.id}</p>
    </div>
  )
}
