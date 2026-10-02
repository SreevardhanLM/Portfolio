import './App.css'
import NavBar from './Component/NavBar'
import About from './Component/About'
import AboutContent from './Component/AboutContent'
import Skill from './Component/skill'
import Project from './Component/project'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <AboutContent />
        <Skill />
        <Project />
      </main>
      <Footer />
    </>
  )
}

export default App
