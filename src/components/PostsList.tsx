import Post from "./Post";
import NewPost from "./NewPost";

function PostList() {
  return (
    <>
      <NewPost />

      <hr />

      <div className="grid grid-cols-4 gap-4 mt-5">
        <Post name="Hendra" something="React.js is awesome!" />
        <Post name="Jason" something="Suka main game" />
        <Post name="Justin" something="Suka banget nangis" />
        <Post name="Tikus" something="suka gigit kabel" />
        <Post name="Anjing" something="Suka rusuh di rumah" />
        <Post name="Papi" something="Suka banget touring dan jalan jalan" />
      </div>
    </>
  )
}

export default PostList;