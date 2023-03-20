import BackgroundMenu from './BackgroundMenu'
import { AmbientPanel } from './panels/AmbientPanel'

export function Header () {
    return (
        <header className='flex'>
            <AmbientPanel />
            <BackgroundMenu />
        </header>
    )
}
