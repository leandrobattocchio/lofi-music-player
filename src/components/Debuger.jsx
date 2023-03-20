import { useSoundStore } from '../store/useSoundStore'

export function Debuger () {
  const [sound, action, volume, volumeRain, soundRain, loading] = useSoundStore(state =>
    [
      state.sound,
      state.action,
      state.volume,
      state.volumeRain,
      state.soundRain,
      state.loading
    ])

  const isShow = false
  return (
    <>
      {isShow && (
        <div className='fixed top-0 right-0 bg-white p-4 text-xs text-gray-900'>
          <ul>
            <li>Sound: {sound ? 'yes' : 'no'}</li>
            <li>Sound Rain: {soundRain ? 'yes' : 'no'}</li>
            <li>Action: {action}</li>
            <li>Volume: {volume / 100}</li>
            <li>Volume rain: {volumeRain / 100}</li>
            <li>Loading: {loading ? 'true' : 'false'}</li>
          </ul>
        </div>
      )}
    </>
  )
}
