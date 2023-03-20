import { Howl } from 'howler'
import { useState } from 'react'

export const useAmbientSound = ({ ambientSound }) => {
    const [sound, setSound] = useState(null)
    const [volume, setVolume] = useState(100)

    const changeVolume = (newVolume) => {
        if (sound) {
            sound.volume(newVolume / 100)
        }
        setVolume(newVolume)
    }

    const playSound = () => {
        const ambient = new Howl({
            src: [ambientSound],
            loop: true,
            volume: volume / 100,
            xhr: {
                method: 'GET',
                mode: 'no-cors',
                credentials: 'omit',
                cache: 'default'
            }
        })
        ambient.play()
        setSound(ambient)
    }

    const stopSound = () => {
        if (sound) {
            sound.stop()
            sound.unload()
            setSound(null)
        }
    }

    const handleSound = () => {
        sound
            ? stopSound()
            : playSound()
    }

    return { sound, volume, handleSound, changeVolume }
}
