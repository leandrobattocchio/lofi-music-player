import { useSoundStore } from '../store/useSoundStore'
import { Loader } from './Loader'
import { ReproductionPanel } from './panels/ReproductionPanel'
import { VolumePanel } from './panels/VolumePanel'
import SoundtrackInfo from './SoundtrackInfo'

export const MusicPlayer = () => {
    const [sound, loading] = useSoundStore(state => [state.sound, state.loading])

    return (
        <div className="flex flex-col justify-end items-center min-h-screen">
            {sound && (
                loading ? <Loader /> : <SoundtrackInfo />
            )}
            <ReproductionPanel />
            <VolumePanel />
        </div>
    )
}
