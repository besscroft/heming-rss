"use client"


import { NavBar } from '@/components/NavBar'
import { SideBar } from '@/components/SideBar'
import { Content } from '@/components/Content'

export function Home() {
    return (
        <div className="w-screen h-screen flex flex-row">
            <SideBar className={'basis-14 bg-slate-50'} />
            <NavBar className={'basis-72 bg-slate-100'} />
            <Content className={'basis-auto'} />
        </div>
    )
}
