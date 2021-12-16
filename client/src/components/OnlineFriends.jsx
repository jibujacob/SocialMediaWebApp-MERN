import React from 'react'
import styled from "styled-components"

const Friend = styled.li`
   display:flex;
   align-items:center;
   margin-bottom:15px; 
`

const FriendProfileImageContainer = styled.div`
    margin-right:10px;
    position:relative;
`

const FriendProfileImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
    object-fit:cover;
`

const FriendOnlineBadge = styled.span`
    width:12px;
    height:12px;
    border-radius:50%;
    background-color:limegreen;
    position:absolute;
    top:2px;
    right:0px;
    border:2px solid white;

`

const FriendName = styled.span`
    font-weight:500;
 `

const OnlineFriends = ({user}) => {
    return (
            <Friend> 
                <FriendProfileImageContainer>
                    <FriendProfileImage src={user.profilePicture}/>
                    <FriendOnlineBadge/>
                </FriendProfileImageContainer> 
                <FriendName>{user.username}</FriendName>
            </Friend>
    )
}

export default OnlineFriends
