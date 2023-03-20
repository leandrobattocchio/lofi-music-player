import { useSoundStore } from '../store/useSoundStore'
import { Wave } from '../components/Wave'
import { BACKGROUND_STYLE, BUTTONS_ACTIONS } from '../const/const'
import { StopedSoundIcon } from './Icons'

const SoundtrackInfo = () => {
    const [title, action] = useSoundStore(state => [state.title, state.action])
    const isStopped = action === BUTTONS_ACTIONS.STOP

    return (
        <div className={`absolute left-12 bottom-5 flex justify-center items-center gap-2 mb-3 px-5 py-2 ${BACKGROUND_STYLE.DARK} track-info`}>
            {isStopped
                ? <StopedSoundIcon className='w-6 h-6' />
                : <Wave />
            }
            <h3>{title}</h3>
        </div>
    )
}

export default SoundtrackInfo
