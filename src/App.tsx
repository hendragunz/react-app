import './App.css';
import PostList from './components/PostsList';

function App() {
  return (
    <main className='relative max-w-layout mx-auto px-5 md:px-6 lg:px-12 pt-6 md:pt-8 lg:pt-10 border-color-border xl:border-x'>
      <PostList />
    </main>
  )
}

export default App
