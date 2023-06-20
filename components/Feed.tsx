import Parser, { Item } from 'rss-parser'
import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { default as dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.locale('zh-cn') // 使用本地化语言

interface FeedProps {
    url: string
}

function Feed({ url }: FeedProps) {
    const [items, setItems] = useState<Item[]>([])
    const [title, setTitle ] = useState<any | null>('')
    const [link, setLink ] = useState<any | null>('')
    const [description, setDescription ] = useState<any | null>('')

    useEffect(() => {
        const parser = new Parser(
            {
                defaultRSS: 2.0,
                timeout: 5000,
            }
        );
        parser.parseURL(url)
            .then((feed) => {
                setItems(feed.items)
                setTitle(feed.title)
                setLink(feed.link)
                setDescription(feed.description)
            })
            .catch((error) => console.log(error))
    }, [url])

    return (
        <div>
            <div className={'flex justify-center items-center mt-2'}>
                <div className={'w-1/3 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl'}>
                    <a className={'block rounded-xl bg-white p-4 sm:p-6 lg:p-8'} href={link} target={'_blank'}>
                        <Avatar sx={{ width: 56, height: 56 }}><RssFeedIcon /></Avatar>
                        <div className={'mt-10'}>
                            <h3 className={'text-lg font-bold text-gray-900 sm:text-xl'}>
                                {title}
                            </h3>

                            <p className={'mt-2 text-sm text-gray-500'}>
                                {description}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className={'flex flex-col space-y-4 items-center justify-center w-1/2 m-auto mt-2'}>
                {items.map((item) => (
                    <Card sx={{ minWidth: 275 }} key={item.guid}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                更新日期 {dayjs(item.pubDate).format('YYYY-MM-DD')}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.contentSnippet ? item.contentSnippet.slice(0, 100) : ''}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">开始阅读</Button>
                            <Button size="small">查看原文</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Feed
