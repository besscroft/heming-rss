import Image from 'next/image'

export function Logo(props: { className?: string, logo: string }) {
    return (
        <div className={`${props.className} && flex items-center justify-center`}>
            <Image
                src={props.logo}
                alt="logo"
            />
        </div>
    )
}
