import { AmbientButton } from '../buttons/AmbientButton'
import { BirdIcon, RainIcon } from '../Icons'

const AMBIENT_SOUNDS = {
    BIRD: 'https://opengameart.org/sites/default/files/birds-isaiah658_0.ogg',
    RAIN: 'https://opengameart.org/sites/default/files/rain_on_window_loop.wav'
}
/// Add more ambient sounds in a future
export const AmbientPanel = () => {
    return (
        <div className='flex flex-col justify-center items-center absolute my-5 mx-5 gap-3'>
            <AmbientButton Icon={RainIcon} label={'Rain'} ambientSound={AMBIENT_SOUNDS.RAIN} />
            <AmbientButton Icon={BirdIcon} label={'Bird'} ambientSound={AMBIENT_SOUNDS.BIRD} />
        </div>
    )
}
