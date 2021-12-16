import React, { useState } from 'react'
import styled from 'styled-components'

import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Users} from "../dummyData"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    border-radius:10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
    margin:30px 0 ;
`

const Wrapper = styled.div`
    padding:10px;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const PostOwnerDetails = styled.div`
    display:flex;
    align-items:center;
`

const PostOwnerImage = styled.img`
    width:32px;
    height:32px;
    border-radius:50%;
    cursor:pointer;
    object-fit:cover;
`

const PostOwnerName = styled.span`
    font-size: 15px;
    font-weight:500;
    margin:0 10px;
`

const PostDate = styled.span`
    font-size:12px;
`

const Options = styled.div``

const MoreVert = styled(MoreVertIcon)``

const Center = styled.div`
    margin:20px 0;
`

const PostText = styled.span``

const PostImage = styled.img`
    margin-top:20px;
    width:100%;
    max-height:500px;
    object-fit:contain;
`

const Bottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const PostIconsWrapper = styled.div`
    display:flex;
    align-items:center;
`

const PostLikeIcon = styled.img`
    height:24px;
    width:24px;
    margin-right:5px;
    cursor:pointer;
`

const PostHeartIcon = styled(PostLikeIcon)``

const PostLikeCounter = styled.span`
    font-size:15px;
`

const PostCommentsWrapper = styled.div``

const PostCommentText = styled.span`
    font-size:15px;
    cursor:pointer;
    border-bottom:1px dashed gray;
`

const Post = ({post}) => {

    const user = Users.find(user => user.id === post.userId)
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const handleClick = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <Container>
            <Wrapper>
                <Top>
                    <PostOwnerDetails>
                        <PostOwnerImage src={user.profilePicture}/>
                        <PostOwnerName>{user.username}</PostOwnerName>
                        <PostDate>{post.date}</PostDate>
                    </PostOwnerDetails>
                    <Options>
                        <MoreVert/>
                    </Options>
                </Top>
                <Center>
                    <PostText>{post?.desc}</PostText>
                    <PostImage src={post.photo} />
                </Center>
                <Bottom>
                    <PostIconsWrapper>
                        <PostLikeIcon onClick={handleClick} src="/assets/like.png" />
                        <PostHeartIcon onClick={handleClick} src="/assets/heart.png" />
                        <PostLikeCounter>{like} people like it</PostLikeCounter>
                    </PostIconsWrapper> 
                    <PostCommentsWrapper>
                        <PostCommentText>{post.comment} comments </PostCommentText>
                    </PostCommentsWrapper>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Post
