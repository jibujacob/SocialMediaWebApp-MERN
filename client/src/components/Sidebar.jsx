import React from 'react'
import styled ,{ css } from "styled-components"

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriends from './CloseFriends';
import { Users } from '../dummyData';


const Container = styled.div`
    flex:3;
    height: calc(100vh - 50px);
    overflow-y:scroll;
    position:sticky;
    top:50px;
   
    &::-webkit-scrollbar{
        width:5px;
    }

    &::-webkit-scrollbar-track{
        background-color:#f1f1f1;
    }

    &::-webkit-scrollbar-thumb{
        background-color:rgb(179,179,179);
    }
   
`

const Wrapper = styled.div`
    padding:20px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`

const ListItem = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    cursor:pointer;
`

// Below are the material UI components styling

const IconStyle = css`
    margin-right:15px;
    margin-left:10px;
`
const Feed = styled(RssFeedIcon)`
    ${IconStyle}
`

const Chat = styled(ChatIcon)`
    ${IconStyle}
`

const PlayCircle = styled(PlayCircleFilledOutlinedIcon)`
    ${IconStyle}
`

const Group = styled(GroupIcon)`
    ${IconStyle}
`

const Bookmark = styled(BookmarkIcon)`
    ${IconStyle}
`

const HelpOutline = styled(HelpOutlineIcon)`
    ${IconStyle}
`

const WorkOutline = styled(WorkOutlineIcon)`
    ${IconStyle}
`

const Event = styled(EventIcon)`
    ${IconStyle}
`

const School = styled(SchoolIcon)`
    ${IconStyle}
`

const ListItemTitle = styled.span`
    ${IconStyle}
`

const Button = styled.button`
    width:150px;
    border:none;
    padding:10px;
    border-radius:5px;
    cursor:pointer;
    font-weight:500;
`
const Hr = styled.hr`
    margin:20px 0;
`

const FriendList = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
`



const Sidebar = () => {
    return (
        <Container>
           <Wrapper>
               <List>
                    <ListItem>
                        <Feed/>
                        <ListItemTitle>Feed</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <Chat/>
                        <ListItemTitle>Chats</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <PlayCircle/>
                        <ListItemTitle>Videos</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <Group/>
                        <ListItemTitle>Groups</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <Bookmark/>
                        <ListItemTitle>Bookmarks</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <HelpOutline/>
                        <ListItemTitle>Questions</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <WorkOutline/>
                        <ListItemTitle>Jobs</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <Event/>
                        <ListItemTitle>Events</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <School/>
                        <ListItemTitle>Courses</ListItemTitle>
                    </ListItem>
               </List>
               <Button>Show More</Button>
               <Hr/>
               <FriendList>
                    {Users.map(user => {
                        return <CloseFriends key={user.id} user={user}/>
                    })}    
               </FriendList>
           </Wrapper> 
        </Container>
    )
}

export default Sidebar
