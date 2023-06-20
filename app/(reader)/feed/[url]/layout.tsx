'use client'

import React from 'react'
import { NavBar } from '@/components/ui/NavBar'
import { SideBar } from '@/components/ui/SideBar'

interface URLProps {
    children?: React.ReactNode
}

export default async function URLLayout({ children }: URLProps) {
    return (
        <div className="w-screen h-screen flex flex-row">
            <SideBar className={'basis-14 bg-slate-50'} active={'quiz'} />
            <NavBar className={'basis-72 bg-slate-100'} />
            <div className={'basis-auto max-w-[calc(100%-20.8rem)] h-full overflow-y-auto'}>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
