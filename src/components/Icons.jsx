export const MaxSoundIcon = ({ className, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`${className} icon icon-tabler icon-tabler-volume`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
        </svg>
    )
}

export const MinSoundIcon = ({ className, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`${className} icon icon-tabler icon-tabler-volume-2`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
        </svg>
    )
}

export const MutedSoundIcon = ({ className, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`${className} icon icon-tabler icon-tabler-volume-3`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
            <path d="M16 10l4 4m0 -4l-4 4"></path>
        </svg>
    )
}

export const NextTrackIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-player-track-next`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5v14l8 -7z"></path>
            <path d="M14 5v14l8 -7z"></path>
        </svg>
    )
}

export const BackTrackIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-player-track-prev`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 5v14l-8 -7z"></path>
            <path d="M10 5v14l-8 -7z"></path>
        </svg>
    )
}

export const PauseIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-player-pause`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
            <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
        </svg>
    )
}

export const PlayIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-player-play`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4v16l13 -8z"></path>
        </svg>
    )
}

export const FullscreenIcon = ({ className, handleFullScreen }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleFullScreen} className={`${className} icon icon-tabler icon-tabler-maximize`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
            <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
            <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
        </svg>
    )
}

export const StopedSoundIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-player-stop-filled`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" strokeWidth="0" fill="currentColor"></path>
        </svg>
    )
}

export const BirdIcon = ({ className, handleSound }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSound} className={`${className} icon icon-tabler icon-tabler-feather`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4"></path>
            <path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4"></path>
        </svg>
    )
}

export const RainIcon = ({ className, handleSound }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSound} className={`${className} icon icon-tabler icon-tabler-cloud-rain`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"></path>
            <path d="M11 13v2m0 3v2m4 -5v2m0 3v2"></path>
        </svg>
    )
}

export const BackgroundIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-texture`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 3l-3 3"></path>
            <path d="M21 18l-3 3"></path>
            <path d="M11 3l-8 8"></path>
            <path d="M16 3l-13 13"></path>
            <path d="M21 3l-18 18"></path>
            <path d="M21 8l-13 13"></path>
            <path d="M21 13l-8 8"></path>
        </svg>
    )
}
