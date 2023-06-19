import { Avatar } from '@mui/material'

export function HeMingAvatar(props: { className?: string, avatar: string }) {
    return (
        <div className={`${props.className} && flex items-center justify-center`}>
            <Avatar src={props.avatar} />
        </div>
    )
}
