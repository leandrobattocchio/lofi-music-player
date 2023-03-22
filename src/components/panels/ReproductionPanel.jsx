import { BACKGROUND_STYLE, BUTTONS_ACTIONS } from '../../const/const'
import { BackTrackIcon, NextTrackIcon, PauseIcon, PlayIcon } from '../Icons'
import { ReproductorButton } from '../buttons/ReproductorButton'
import useSound from '../../hooks/useSound'

export const ReproductionPanel = () => {
    const { action, sound } = useSound()

    const isStoping = (action === BUTTONS_ACTIONS.STOP) || !sound
    const STYLE_BUTTON = 'w-5 cursor-pointer button-panel'

    return (
        <div className={`flex justify-center items-center mb-8 px-5 py-2.5 ${BACKGROUND_STYLE.DARK} rep-panel`}>
            <ReproductorButton action={BUTTONS_ACTIONS.BACK} Icon={BackTrackIcon} className={STYLE_BUTTON} />
            {
                isStoping
                    ? <ReproductorButton action={BUTTONS_ACTIONS.PLAY} Icon={PlayIcon} className={STYLE_BUTTON} />
                    : <ReproductorButton action={BUTTONS_ACTIONS.STOP} Icon={PauseIcon} className={STYLE_BUTTON} />
            }
            <ReproductorButton action={BUTTONS_ACTIONS.NEXT} Icon={NextTrackIcon} className={STYLE_BUTTON} />
        </div>
    )
}
