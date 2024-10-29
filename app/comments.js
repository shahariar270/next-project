import React from 'react'

export default async function Comments({promise}) {
    const comment=await promise
    

  return (
    <div>
             <div className="mt-10">
      <h2 className="text-lg font-bold mb-4">Comments</h2>
      <ul className="mb-4 space-y-4">
        {comment.map((comment) => (
          <li key={comment.id} className=" p-4 rounded">{comment.body}</li>
          ))}
      </ul>
     </div>
    </div>
  )
}
