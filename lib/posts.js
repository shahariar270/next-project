import React from 'react'

export default async function getPosts() {
    
    const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    
    return res.json()

 
}
