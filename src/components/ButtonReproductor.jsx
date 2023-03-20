import { useSoundStore } from '../store/useSoundStore'

export const ButtonReproductor = ({ action, Icon, className }) => {
    const [changeAction] = useSoundStore(state => [state.changeAction])

    return (
        <div
            onClick={() => {
                changeAction(action)
            }}>
            <Icon className={className} />
        </div>
    )
}
