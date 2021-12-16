import React from 'react'
import styled from "styled-components"
import Post from './Post'
import Share from './Share'

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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Wrapper>
        </Container>
    )
}

export default Feed
