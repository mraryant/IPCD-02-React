
import Headroom from 'react-headroom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import About from './components/home/About'
import WhayChoose from './components/home/WhayChoose'
import Contract from './components/home/Contract'
import Usecase from './components/home/Usecase'
import Roadmap from './components/home/Roadmap'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Headroom style={{ zIndex: 99 }}>
        <Navbar />
      </Headroom>
      <Hero />
      <About />
      <WhayChoose />
      <Contract />
      <Usecase />
      <Roadmap />
      <Footer />

    </>
  )
}

export default App
