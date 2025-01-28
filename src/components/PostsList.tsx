import { useLoaderData } from "react-router-dom"
import Post from "./Post"

function PostList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          {posts.map((post) => <Post key={post.id} id={post.id} name={post.name} something={post.something} />)}
        </div>
      )}

      {posts.length === 0 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div>
            <h2>There are no posts yet.</h2>
            <p>Start adding post!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PostList
