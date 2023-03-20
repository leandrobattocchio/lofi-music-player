import { Header } from './components/Header'
import { Debuger } from './components/Debuger'
import { MusicPlayer } from './components/MusicPlayer'
import { useSoundStore } from './store/useSoundStore'
import Footer from './components/Footer'

function App () {
  const [background] = useSoundStore(state => [state.background])

  return (
    <div style={{ backgroundImage: `${background ? `url(${background})` : ''}` }} className='background-home'>
      <Header />
      <MusicPlayer />
      <Footer />
      <Debuger />
    </ div>
  )
}

export default App
