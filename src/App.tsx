import './app.css'
import { About } from './features/about/About';
import { Board } from './features/board/Board';
import { Info } from './features/info/Info';

function App() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='w-1/2 h-1/2 self-center text-center items-center justify-center flex flex-col'>
        <h1 id="title" className='sm:text-9xl text-8xl font-black'>Andra</h1>
        <h2 id="allura" className='text-6xl text-center sm:mr-40 mr-25 -mt-10'>Portfolio</h2>
      </div>
      <Board />
      <About />
      <Info />
    </main>
  )
}

export default App;