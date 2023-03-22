import { useSoundStore } from './store/useSoundStore'
import Home from './components/pages/Home'

function App () {
  const [background] = useSoundStore(state => [state.background])

  return (
    <div style={{ backgroundImage: `${background ? `url(${background})` : ''}` }} className='background-home'>
      <Home />
    </ div>
  )
}

export default App
