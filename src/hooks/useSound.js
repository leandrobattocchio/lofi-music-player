import { useEffect } from 'react'
import { BUTTONS_ACTIONS, SOUNDTRACKS } from '../const/const'
import { useSoundStore } from '../store/useSoundStore'
import { Howl } from 'howler'

const getRandomSound = () => {
    const randomSoundIndex = Math.floor(Math.random() * SOUNDTRACKS.length)
    return SOUNDTRACKS[randomSoundIndex]
}

const getSoundtrackIndex = (title) => {
    const index = SOUNDTRACKS.findIndex(track => track.title === title)
    return index
}

const useSound = () => {
    const [sound,
        action,
        changeAction,
        changeSound,
        changeTitle,
        title,
        volume,
        changeVolume,
        changeLoading
    ] = useSoundStore(state =>
        [state.sound,
        state.action,
        state.changeAction,
        state.changeSound,
        state.changeTitle,
        state.title,
        state.volume,
        state.changeVolume,
        state.changeLoading
        ])

    const onEndedSound = () => {
        changeAction(BUTTONS_ACTIONS.NEXT)
    }

    useEffect(() => {
        if (!sound && action === BUTTONS_ACTIONS.STOP) return

        // stop soundtrack
        if (sound && action === BUTTONS_ACTIONS.STOP) {
            sound.pause()
        }

        // play sountrack
        if (sound && action === BUTTONS_ACTIONS.PLAY) {
            const currentPosition = sound.seek()
            sound.play()
            sound.seek(currentPosition)
        }

        // back or next soundtrack
        if (sound && (action === BUTTONS_ACTIONS.NEXT || action === BUTTONS_ACTIONS.BACK)) {
            let soundtrackIndex = getSoundtrackIndex(title)
            changeLoading(true)

            if (action === BUTTONS_ACTIONS.NEXT) {
                soundtrackIndex < SOUNDTRACKS.length - 1
                    ? soundtrackIndex += 1
                    : soundtrackIndex = 0
            } else {
                soundtrackIndex > 0
                    ? soundtrackIndex -= 1
                    : soundtrackIndex = SOUNDTRACKS.length - 1
            }

            const { src, title: newTitlte } = SOUNDTRACKS[soundtrackIndex]

            sound.stop()
            sound.unload()

            const newSoundtrack = new Howl({
                src,
                onend: () => onEndedSound(),
                volume: volume / 100
            })
            changeSound(newSoundtrack)
            changeTitle(newTitlte)
            changeAction(BUTTONS_ACTIONS.PLAY)
            changeLoading(false)
        }

        // first play
        if (!sound && action === BUTTONS_ACTIONS.PLAY) {
            const { src, title } = getRandomSound()
            changeLoading(true)
            const soundtrack = new Howl({
                src,
                onend: () => onEndedSound(),
                volume: volume / 100,
                xhr: {
                    method: 'GET',
                    mode: 'no-cors',
                    credentials: 'omit',
                    cache: 'default'
                }
            })
            changeSound(soundtrack)
            changeTitle(title)
            soundtrack.play()
            changeLoading(false)
        }
    }, [action])

    return { action, changeAction, volume, changeVolume, sound }
}

export default useSound
