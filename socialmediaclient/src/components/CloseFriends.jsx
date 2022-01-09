import React from 'react'
import styled from 'styled-components'

const Friend = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:15px;
`

const FriendImage = styled.img`
    width:32px;
    height:32px;
    border-radius:50%;
    object-fit:cover;
    margin-right:10px;
`

const FriendName = styled.span`

`

const CloseFriends = ({user}) => {
    return (
        <Friend>
            <FriendImage src={user.profilePicture}/>
            <FriendName>{user.username}</FriendName>
        </Friend>
    )
}

export default CloseFriends
