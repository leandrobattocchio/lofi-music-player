import { create } from 'zustand'
import { BACKGROUNDS } from '../const/const'

export const useSoundStore = create((set, get) => ({
    sound: null,
    title: '',
    action: null,
    volume: 100,
    loading: false,
    background: BACKGROUNDS[0].src,
    changeBackground: (newBackground) => {
        set({ background: newBackground })
    },
    changeLoading: (loading) => {
        set({ loading })
    },
    changeTitle: (title) => {
        set({ title })
    },
    changeSound: (sound) => {
        set({ sound })
    },
    changeAction: (action) => {
        set({ action })
    },
    changeVolume: (newVolume) => {
        const actualSound = get().sound
        if (actualSound) {
            actualSound.volume(newVolume / 100)
        }
        set({ volume: newVolume })
    }
}))
