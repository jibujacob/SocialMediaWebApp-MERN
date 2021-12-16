import styled from "styled-components"

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Container = styled.div`
    height:50px;
    width:100%;
    background-color : #1877f2;
    display: flex;
    align-items:center;
    position:sticky;
    top:0;
    z-index:99;
`

const Left = styled.div`
     flex:3;
`

const Logo = styled.span`
    font-size:24px;
    margin-left:20px;
    font-weight:bold;
    color:white;
    cursor:pointer;
`

const Center = styled.div`
    flex:5;

    @media only screen and (max-width:480px){
        display:none;
    }
`

const SearchBarWrapper = styled.div`
    width:100%;
    height:30px;
    background-color:white;
    border-radius:30px;
    display:flex;
    align-items:center;
`

const Search = styled(SearchIcon)`
    font-size:20px !important; 
    margin-left:10px;
`

const Input = styled.input`
    border:none;
    width:70%;

    &:focus{
        outline:none;
    }
`

const Right = styled.div`
    flex:4;
    display:flex;
    align-items:center;
    justify-content:space-around;
    color:white;

    @media only screen and (max-width:480px){
        justify-content:flex-end;
    }
` 

const Links = styled.div`
    @media only screen and (max-width:480px){
        display:none;
    }
`

const Link = styled.span`
    margin-right:10px;
    font-size:14px;
    cursor:pointer; 
`

const Icons = styled.div`
    display:flex;
    align-items:center;
`

const IconItem = styled.div`
    margin-right:15px;
    cursor:pointer;
    position:relative;
`

const Person = styled(PersonIcon)``

const Chat = styled(ChatIcon)``

const Notifications = styled(NotificationsIcon)``

const IconBadge = styled.span`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color: red ;
    color:white;
    position: absolute ;
    top:-5px;
    right:-5px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
`

const ProfileImage = styled.img`
    height:32px;
    width:32px;
    border-radius:50%;
    object-fit:cover;
    cursor:pointer;
`

const Topbar = () => {
    return (
        <Container>
            <Left>
                <Logo>JJSocial</Logo>
            </Left>
            <Center>
                <SearchBarWrapper>
                    <Search/>
                    <Input placeholder="Search for friend, post or video"/>
                </SearchBarWrapper>
            </Center>
            <Right>
                <Links>
                    <Link>Homepage</Link>
                    <Link>Timeline</Link>
                </Links>
                <Icons>
                    <IconItem>
                        <Person/>
                        <IconBadge>2</IconBadge>
                    </IconItem>
                    <IconItem>
                        <Chat/>
                        <IconBadge>3</IconBadge>
                    </IconItem>
                    <IconItem>
                        <Notifications/>
                        <IconBadge>1</IconBadge>
                    </IconItem>
                </Icons>
                <ProfileImage src="/assets/person/1.jpeg" alt="profile_img"/>
            </Right>
        </Container>
    )
}



export default Topbar
