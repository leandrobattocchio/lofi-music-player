import { useState } from 'react'
import { useShowButtonRadio } from '../hooks/useShowButtonRadio'
import { FullscreenIcon } from './Icons'

export const Fullscreen = () => {
    const { isShow, handleMouseOver, handleMouseOut } = useShowButtonRadio()
    const [isFullscreen, setIsFullscreen] = useState(false)

    const handleFullScreen = () => {
        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen()
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen()
            }
            setIsFullscreen(false)
        } else {
            const element = document.documentElement
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.webkitRequestFullscreen) { /* Safari */
                element.webkitRequestFullscreen()
            } else if (element.msRequestFullscreen) { /* IE11 */
                element.msRequestFullscreen()
            }
            setIsFullscreen(true)
        }
    }

    return (
        <div className='flex cursor-pointer group' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} >
            <FullscreenIcon className='w-7 h-7 mt-2 group-hover:scale-125 transition-transform' handleFullScreen={handleFullScreen} />
            <div className='ml-3'>
                {isShow &&
                    (
                        <div className='text-xs flex flex-col justify-center items-center absolute bg-gray-900 bg-opacity-50 px-2 py-1 rounded'>
                            <h6 className='cursor-pointer hover:text-gray-900 w-24 text-center ml-2' onClick={handleFullScreen}>Fullscreen</h6>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
