import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import Hero from './Components/Hero'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import WriterProjectPage from './Pages/Projects/writer'
import WhiteHunterPage from './Pages/Projects/WhiteHunter'
import InterviewPage from './Pages/Projects/Interview'
import WladcorePage from './Pages/Projects/Wladcore'
import WladcodePage from './Pages/Projects/Wladcode'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/writer" element={<WriterProjectPage />} />
        <Route path="/projects/whitehunter" element={<WhiteHunterPage />} />
        <Route path="/projects/interview" element={<InterviewPage />} />
        <Route path="/projects/wladcore" element={<WladcorePage />} />
        <Route path="/projects/wladcode" element={<WladcodePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
