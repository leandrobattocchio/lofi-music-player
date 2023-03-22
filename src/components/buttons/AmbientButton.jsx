import { BACKGROUND_STYLE } from '../../const/const'
import { useAmbientSound } from '../../hooks/useAmbientSound'
import { useShowButtonRadio } from '../../hooks/useShowButtonRadio'

export const AmbientButton = ({ ambientSound, label, Icon }) => {
    const { isShow, handleMouseEnter, handleMouseLeave } = useShowButtonRadio()
    const { changeVolume, handleSound, sound, volume } = useAmbientSound({ ambientSound })

    return (
        <div className='flex justify-center items-start cursor-pointer group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Icon className={`${BACKGROUND_STYLE.DARK} w-9 h-8 p-1 mt-2 opacity-75 group-hover:scale-125 group-hover:opacity-100 transition-transform`} handleSound={handleSound} />
            <div className='ml-3'>
                <div className={`${isShow ? 'popping' : 'hiding'} text-xs flex flex-col justify-center items-center absolute bg-gray-900 bg-opacity-50 px-2 py-1 rounded transition-transform  w-32`}>
                    <h6 className='cursor-pointer opacity-75 hover:opacity-100 w-24 text-center' onClick={handleSound}>{label}</h6>
                    {sound && <input className='ambient-input' type='range' min='0' max='100' value={volume} onChange={({ target }) => changeVolume(target.value)} />}
                </div>
            </div>
        </div>
    )
}
