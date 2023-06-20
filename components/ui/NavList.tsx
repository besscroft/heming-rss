import * as React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import { Collapse, Divider, List, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PsychologyIcon from '@mui/icons-material/Psychology'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Link from "next/link"

function ListItemLink(personData: any) {
    return personData.map((item: any) => {
        <Link
            href={`/reader/${item.url}`}
            className="font-semibold hover:underline"
        >
            <ListItemButton sx={{ pl: 2 }}>
                <ListItemIcon>
                    <RssFeedIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItemButton>
        </Link>
    })
}

export function NavList(props: { className?: string, activeItem: string }) {
    const [openPerson, setOpenPerson] = React.useState(true)
    const [openOther, setOpenOther] = React.useState(false)
    const [openKit, setOpenKit] = React.useState(false)
    const personData = [
        {
            name: '旅行者的随想',
            url: 'https://blog.besscroft.com/rss.xml',
            icon: <RssFeedIcon />
        },
        {
            name: '阮一峰周刊',
            url: 'https://feeds.feedburner.com/ruanyifeng',
            icon: <RssFeedIcon />
        },
        {
            name: '螺莉莉数据中心',
            url: 'https://roriri.one/atom.xml',
            icon: <RssFeedIcon />
        }
    ]
    const otherData = [
        {
            name: '鹤鸣官方订阅集',
            url: 'test1',
            icon: <RssFeedIcon />
        },
        {
            name: 'IELTS 雅思',
            url: 'https://rsshub.app/ielts',
            icon: <RssFeedIcon />
        },
        {
            name: 'Nature 期刊订阅',
            url: 'https://rsshub.app/nature/research/nature',
            icon: <RssFeedIcon />
        },
        {
            name: '中国知网',
            url: 'https://rsshub.app/cnki/journals/LKGP',
            icon: <RssFeedIcon />
        }
    ]

    const handleClick = (active: string) => {
        if (active === 'person') {
            setOpenPerson(!openPerson)
        } else if (active === 'other') {
            setOpenOther(!openOther)
        } else if (active === 'kit') {
            setOpenKit(!openKit)
        }
    }
    return (
        <div className={`${props.className} && flex flex-col space-y-2`}>
            <ListItemButton onClick={() => handleClick('person')}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'个人订阅'} />
                {openPerson ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openPerson} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        personData.map((item: any) => {
                            return <Link
                                href={`/feed/${encodeURIComponent(item.url)}`}
                                className="font-semibold hover:underline"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <ListItemButton sx={{ pl: 2 }}>
                                    <ListItemIcon>
                                        <RssFeedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        })
                    }
                </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={() => handleClick('other')}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'第三方订阅集'} />
                {openOther ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openOther} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        otherData.map((item: any) => {
                            return <Link
                                href={`/feed/${encodeURIComponent(item.url)}`}
                                className="font-semibold hover:underline"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <ListItemButton sx={{ pl: 2 }}>
                                    <ListItemIcon>
                                        <RssFeedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        })
                    }
                </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={() => handleClick('kit')}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'工具栏'} />
                {openKit ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openKit} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="添加订阅" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 2 }}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="最近阅读" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 2 }}>
                        <ListItemIcon>
                            <SmartToyIcon />
                        </ListItemIcon>
                        <ListItemText primary="ChatGPT Summary" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 2 }}>
                        <ListItemIcon>
                            <PsychologyIcon />
                        </ListItemIcon>
                        <ListItemText primary="AI 设置" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    )
}
