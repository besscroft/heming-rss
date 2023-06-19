import { Logo } from './Logo'
import { HeMingAvatar } from './HeMingAvatar'
import SettingsIcon from '@mui/icons-material/Settings'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import QuizIcon from '@mui/icons-material/Quiz'

export function SideBar(props: { className?: string, active?: string }) {
    return (
        <div className={`${props.className}` && 'flex flex-col'}>
            <Logo className={'h-12'} logo={'./favicon.ico'} />
            <div className={'h-[calc(100vh-96px)] flex flex-col space-y-4 items-center justify-center'}>
                <SettingsIcon className={'cursor-pointer'} color={ props.active === 'setting' ? 'primary' : '' } />
                <RssFeedIcon className={'cursor-pointer'} color={ props.active === 'rssFeed' ? 'primary' : '' } />
                <QuizIcon className={'cursor-pointer'} color={ props.active === 'quiz' ? 'warning' : '' } />
            </div>
            <HeMingAvatar className={'h-12'} avatar={'https://besscroft.com/uploads/avatar.jpeg'} />
        </div>
    )
}
