"use client"


import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import { Content } from '../ui/Content'

export function Home() {
    return (
        <div className="w-screen h-screen">
            <SideBar />
            <NavBar />
            <Content />
        </div>
    )
}
