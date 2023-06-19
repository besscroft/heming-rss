export function Logo(props: { className?: string, logo: string }) {
    return (
        <div className={`${props.className} && flex items-center justify-center`}>
            <img className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
                 src={props.logo}
                 alt="logo"/>
        </div>
    )
}
