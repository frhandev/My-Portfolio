import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Resume from './Components/Resume/Resume'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
      </main>
    </>
  )
}

export default App
