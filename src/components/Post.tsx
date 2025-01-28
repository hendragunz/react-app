// interface Author {
//   name: string;
//   something: string;
// }

import { Link } from "react-router-dom"

function Post({ id, name, something }) {
  return (
    <div className="rounded-sm bg-blue-200 border-b-blue-600 border-2 p-2 mb-1 basis-1/3">
      <Link to={id}>
        <p>{name}</p>
        <p>{something}</p>
      </Link>
    </div>
  )
}

export default Post