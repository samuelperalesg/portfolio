import './styles.scss'

import Header from './components/Header'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Work from './sections/Contact'
import About from './sections/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Experience />
      <Work />
      <div className='footer-end'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
