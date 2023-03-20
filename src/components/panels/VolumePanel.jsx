import { useRef } from 'react'
import { BACKGROUND_STYLE } from '../../const/const'
import { useSoundStore } from '../../store/useSoundStore'
import { MaxSoundIcon, MutedSoundIcon, MinSoundIcon } from '../Icons'

const STYLES_VOLUME = 'w-5 h-6 cursor-pointer'

export const VolumePanel = () => {
    const [volume, changeVolume] = useSoundStore(state => [state.volume, state.changeVolume])
    const previousSound = useRef(0)

    return (
        <div className={`flex absolute right-4 bottom-8 p-2 ${BACKGROUND_STYLE.DARK} `}>
            <div className='flex vol-panel'>
                {
                    volume > 50 && <MaxSoundIcon className={STYLES_VOLUME} onClick={() => {
                        previousSound.current = volume
                        changeVolume(0)
                    }} />
                }
                {(volume < 50 && volume > 0.2) && <MinSoundIcon className={STYLES_VOLUME} onClick={() => {
                    previousSound.current = volume
                    changeVolume(0)
                }} />
                }
                {volume < 0.2 && <MutedSoundIcon className={STYLES_VOLUME} onClick={() => {
                    changeVolume(previousSound.current)
                }} />}
                <div>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        value={volume}
                        onChange={({ target }) =>
                            changeVolume(target.value)
                        } />
                </div>
            </div>
        </div>
    )
}
