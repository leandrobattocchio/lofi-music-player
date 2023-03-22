import { BackgroundPanel } from './panels/BackgroundPanel'
import { AmbientPanel } from './panels/AmbientPanel'

export function Header () {
    return (
        <header className='flex'>
            <AmbientPanel />
            <BackgroundPanel />
        </header>
    )
}
