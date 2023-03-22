import { AmbientButton } from '../buttons/AmbientButton'
import { BirdIcon, RainIcon } from '../Icons'

const AMBIENT_SOUNDS = {
    BIRD: 'https://dl.dropboxusercontent.com/s/euixmm7cf9l0y6h/birds.mp3?dl=0',
    RAIN: 'https://dl.dropboxusercontent.com/s/hths30pv5afz312/rain.mp3?dl=0'
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
