import * as React from 'react'
import { NavList } from '@/components/ui/NavList'

export function NavBar(props: { className?: string }) {
    return (
        <div className={`${props.className} && 'flex flex-col items-center h-full`}>
            <div className={'h-12'}>
                <p className="font-serif text-2xl pl-2 pt-2">鹤鸣 RSS</p>
            </div>
            <div className={'h-[calc(100vh-8rem)] overflow-y-auto'}>
                <NavList activeItem={''} />
            </div>
            <div className={'h-20 flex-end'}>
                <h1 className={'font-serif text-3xl'}>
                    <ruby>鹤
                        <rp>(</rp>
                        <rt>He</rt>
                        <rp>)</rp>
                    </ruby>
                    <ruby>鸣
                        <rp>(</rp>
                        <rt>Ming</rt>
                        <rp>)</rp>
                    </ruby>
                    <span
                        className={'justify-center items-center inline px-2 text-2xl border-4 light:border-pink-100'}
                        data-text={'工作室'}
                    >工作室</span><span className={'text-2xl'}>出品</span>
                </h1>
                <span className={'font-serif'}>Made with ❤ by 云淑鹤鸣真君.</span>
            </div>
        </div>
    )
}
