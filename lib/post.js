import React from 'react'

export default async function getPost(id) {
    
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return res.json()

 
}
