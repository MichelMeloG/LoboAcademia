import Header from './components/Header'
import Home from './components/Home'
import ImageCarousel from './components/ImageCarousel'
import Modalidades from './components/Modalidades'
import Planos from './components/Planos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Modalidades />
        <ImageCarousel />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
