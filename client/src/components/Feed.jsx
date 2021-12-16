import React from 'react'
import styled from "styled-components"
import Post from './Post'
import Share from './Share'

import {Posts} from "../dummyData"

const Container = styled.div`
    flex:5.5;
`

const Wrapper = styled.div`
    padding:20px;
`

const Feed = () => {
    return (
        <Container>
            <Wrapper>
                <Share/>
                {Posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })}
                
            </Wrapper>
        </Container>
    )
}

export default Feed
