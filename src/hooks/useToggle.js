import { useState } from 'react'

export const useToggle = () => {
    const [isShowing, setIsShowing] = useState(false)

    const handleToggle = () => {
        setIsShowing(state => !state)
    }

    return { isShowing, handleToggle }
}
