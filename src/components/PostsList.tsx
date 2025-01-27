import { useState, useEffect } from "react";
import { PostRecord } from "../types";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState<PostRecord[]>([]);
  const [isFetching, setIsFetching] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts()
  }, []);

  function addPostHandler(postData: PostRecord) {
    console.log(postData);

    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          {posts.map((post) => <Post key={post.id} name={post.name} something={post.something} />)}
        </div>
      )}

      {!isFetching && posts.length === 0 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div>
            <h2>There are no posts yet.</h2>
            <p>Start adding post!</p>
          </div>
        </div>
      )}

      {isFetching && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div>
            <h2>Loading post data</h2>
            <p>Please wait....</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PostList;
