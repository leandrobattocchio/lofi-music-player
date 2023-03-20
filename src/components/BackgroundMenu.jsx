import { BackgroundIcon } from './Icons'
import { BACKGROUNDS, BACKGROUND_STYLE } from '../const/const'
import { useSoundStore } from '../store/useSoundStore'
import { useToggle } from '../hooks/useToggle'

const BackgroundMenu = () => {
    const [changeBackground] = useSoundStore((state) => [state.changeBackground])
    const { handleToggle, isShowing } = useToggle()
    const CLICKED_STYLE = `${isShowing ? 'scale-125 opacity-100' : ''}`

    return (
        <div className='absolute right-4 top-8 flex flex-col justify-center items-end min-w-min'>
            <div onClick={handleToggle}>
                <BackgroundIcon
                    className={`${BACKGROUND_STYLE.DARK} ${CLICKED_STYLE} hover:scale-125 hover:opacity-100 w-8 h-7 p-1 opacity-75 cursor-pointer transition-transform mb-3`}
                />
            </div>
            <div onMouseLeave={handleToggle} className={`${BACKGROUND_STYLE.DARK} ${isShowing ? 'popping' : 'hiding'}  flex flex-col px-8 py-6 gap-4 justify-center transition-transform`}>
                {BACKGROUNDS.map(({ src, label }) => {
                    return (
                        <button
                            key={src}
                            onClick={() => changeBackground(src)}
                        >
                            <img src={src} alt={label} className='w-28 h-20 hover:scale-110 transition-transform rounded' />
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default BackgroundMenu
