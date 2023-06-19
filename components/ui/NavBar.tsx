import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import FolderIcon from '@mui/icons-material/Folder'
import { Divider } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import SmartToyIcon from '@mui/icons-material/SmartToy'

export function NavBar(props: { className?: string }) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <div className={`${props.className} && 'flex flex-col`}>
            <div className={'h-12'}>
                <p className="font-serif text-2xl pl-2 pt-2">鹤鸣 RSS</p>
            </div>
            <div className={'h-[calc(100vh-128px)] flex flex-col space-y-4 pt-2'}>
                <List subheader={'个人订阅'}>
                    <ListItem secondaryAction={'23'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="旅行者的随想" />
                    </ListItem>
                    <ListItem secondaryAction={'1'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="阮一峰周刊" />
                    </ListItem>
                    <ListItem secondaryAction={'6'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="螺莉莉数据中心" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={'第三方订阅集'}>
                    <ListItem secondaryAction={'23'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="鹤鸣官方订阅集" />
                    </ListItem>
                    <ListItem secondaryAction={'23'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="RSSHUB 订阅集" />
                    </ListItem>
                    <ListItem secondaryAction={'1'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="Nature 期刊订阅" />
                    </ListItem>
                    <ListItem secondaryAction={'6'}>
                        <ListItemAvatar><RssFeedIcon /></ListItemAvatar>
                        <ListItemText primary="Google 学术" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={'工具栏'}>
                    <ListItem secondaryAction={'23'}>
                        <ListItemAvatar><AddBoxIcon /></ListItemAvatar>
                        <ListItemText primary="添加订阅" />
                    </ListItem>
                    <ListItem secondaryAction={'23'}>
                        <ListItemAvatar><AutoStoriesIcon /></ListItemAvatar>
                        <ListItemText primary="最近阅读" />
                    </ListItem>
                    <ListItem secondaryAction={'1'}>
                        <ListItemAvatar><SmartToyIcon /></ListItemAvatar>
                        <ListItemText primary="ChatGPT Summary" />
                    </ListItem>
                    <ListItem secondaryAction={'6'}>
                        <ListItemAvatar><PsychologyIcon /></ListItemAvatar>
                        <ListItemText primary="AI 设置" />
                    </ListItem>
                </List>
            </div>
            <div className={'h-20'}>
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
