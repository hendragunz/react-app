import './App.css'
import { useState } from 'react';
import MainHeader from './components/MainHeader'
import PostList from './components/PostsList'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />

      <main className='relative max-w-layout mx-auto px-5 md:px-6 lg:px-12 pt-6 md:pt-8 lg:pt-10 border-color-border xl:border-x'>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App
