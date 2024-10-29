import React from 'react'

export default async function getComment(id) {
    
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    
    return res.json()

 
}
