import Header from './components/Header'
import Hero from './components/Hero'
import RCMWorkflow from './components/RCMWorkflow'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <RCMWorkflow />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App