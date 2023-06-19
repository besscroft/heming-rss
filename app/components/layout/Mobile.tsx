"use client"


import { NavBar } from '@/components/NavBar'
import { SideBar } from '@/components/SideBar'
import { Content } from '@/components/Content'

export function Home() {
    return (
        <div className="w-screen h-screen">
            <SideBar />
            <NavBar />
            <Content />
        </div>
    )
}
