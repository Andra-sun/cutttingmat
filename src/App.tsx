import './app.css'
import { About } from './components/About';

function App() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='w-1/2 h-1/2 self-center text-center items-center justify-center flex flex-col'>
        <h1 id="title" className='md:text-9xl text-8xl font-black'>Andra</h1>
        <h2 id="allura" className='text-6xl text-center md:mr-40 mr-25 -mt-10'>Portfolio</h2>
      </div>
      <About />
    </main>
  )
}

export default App;