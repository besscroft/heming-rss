"use client"


import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { Content } from '../Content'

export function Home() {
    return (
        <div className="w-screen h-screen">
            <SideBar />
            <NavBar />
            <Content />
        </div>
    )
}
