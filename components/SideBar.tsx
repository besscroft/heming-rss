import { Logo } from './Logo'
import { Avatar } from './Avatar'

export function SideBar(props: { className?: string }) {
    return (
        <div className={`${props.className}` && 'flex flex-col'}>
            <Logo className={'h-12'} />
            <div className={'h-[calc(100vh-96px)] flex flex-col space-y-4 items-center justify-center'}>
                <div>侧边栏</div>
                <div>侧边栏</div>
                <div>侧边栏</div>
            </div>
            <Avatar className={'h-12'} />
        </div>
    )
}
