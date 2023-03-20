import { useState } from 'react'

export const useShowButtonRadio = () => {
    const [isShow, setIsShow] = useState(false)

    const handleMouseEnter = () => {
        setIsShow(true)
    }

    const handleMouseLeave = () => {
        setIsShow(false)
    }

    return { isShow, handleMouseLeave, handleMouseEnter }
}
