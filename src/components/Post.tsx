// interface Author {
//   name: string;
//   something: string;
// }

function Post({ name, something }) {
  return (
    <div className="rounded-sm bg-blue-200 border-b-blue-600 border-2 p-2 mb-1 basis-1/3">
      <p>{ name }</p>
      <p>{ something }</p>
    </div>
  )
}

export default Post;