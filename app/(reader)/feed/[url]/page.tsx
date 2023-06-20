'use client'

import Feed from '@/components/Feed'

export default async function Page({ params }: { params: { url: string } }) {
    return (
        <div>
            <Feed url={decodeURIComponent(params.url)} />
        </div>
    )
}
