import React from 'react'
import styled from 'styled-components'

import MoreVertIcon from '@mui/icons-material/MoreVert';

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

const PostText = styled.span`

`

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

const PostCommentsWrapper = styled.div`

`

const PostCommentText = styled.span`
    font-size:15px;
    cursor:pointer;
    border-bottom:1px dashed gray;
`

const Post = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <PostOwnerDetails>
                        <PostOwnerImage src="/assets/person/1.jpeg"/>
                        <PostOwnerName>Natasha Romanoff</PostOwnerName>
                        <PostDate>5 mins ago</PostDate>
                    </PostOwnerDetails>
                    <Options>
                        <MoreVert/>
                    </Options>
                </Top>
                <Center>
                    <PostText>Hey! It's my first post:)</PostText>
                    <PostImage src="/assets/post/1.jpeg" />
                </Center>
                <Bottom>
                    <PostIconsWrapper>
                        <PostLikeIcon src="/assets/like.png" />
                        <PostHeartIcon src="/assets/heart.png" />
                        <PostLikeCounter>32 people like it</PostLikeCounter>
                    </PostIconsWrapper> 
                    <PostCommentsWrapper>
                        <PostCommentText>9 comments </PostCommentText>
                    </PostCommentsWrapper>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Post
