import Comments from "@/app/comments";
import NotFound from "@/app/not-found";
import getComment from "@/lib/comment";
import getPost from "@/lib/post";
import { Suspense } from "react";

export async function generateMetadata({params}){
  const { id  } =await params;

const post = getPost(id);


return{
  title: post.title,
  description: post.body
}


}


export default async function BlogPage({ params }) {
  const { id  } =await params;
  const postPromise = getPost(id);
  const commentPromise=  getComment(id);
  
  // const [post,comment]=await Promise.all([postPromise,commentPromise])

  const post = await postPromise;

  return (
    <div>
    {
      post ? (
        <div>
          <h1 className="my-3 text-blue-500">{post.title}</h1>
          <p>{post.body}</p>
          </div>
          ) : (
          <h1>hi dear page is found</h1>
            )
    }
    <hr className="m-4" />
    <Suspense fallback='here comment loading...' >
    <Comments promise={commentPromise} />
    </Suspense>

    </div>
  );
}
