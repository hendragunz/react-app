import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import './index.css'
import Posts, { postsLoader } from './Posts.tsx'
import RootLayout from './routes/RootLayout.tsx'
import NewPost, { submitPost } from './routes/NewPost.tsx'
import PostDetails, { postDetailLoader } from './routes/PostDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: 'create-post', element: <NewPost />, action: submitPost  },
          { path: ':postId', element: <PostDetails />, loader: postDetailLoader }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

