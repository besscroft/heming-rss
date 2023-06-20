"use client"

import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import { Content } from '../ui/Content'

export function Home() {
    return (
        <div className="w-screen h-screen flex flex-row">
            <SideBar className={'basis-14 bg-slate-50'} active={'quiz'} />
            <NavBar className={'basis-72 bg-slate-100'} />
            <Content className={'basis-auto'} />
        </div>
    )
}
