import React from 'react'
import styled from "styled-components"
import { Users } from '../dummyData'
import OnlineFriends from './OnlineFriends'

const Container = styled.div`
    flex:3.5;
    @media only screen and (max-width:645px){
        display:none;
    }
`

const Wrapper = styled.div`
    padding:20px 20px 0 0;
`

const BirthdayContainer = styled.div`
    display:flex;
    align-items:center;
`

const BirthdayImage = styled.img`
    width:40px;
    height:40px;
    margin-right:10px;
`

const BirthdayText = styled.span`
    font-weight:300;
    font-size:15px
`
const AdvertismentImage = styled.img`
    width:100%;
    border-radius:10px;
    margin: 30px 0;
`

const SubHeader = styled.h4`
    margin-bottom:20px;
`

const FriendList = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`


const Rightbar = () => {
    return (
        <Container>
            <Wrapper>
                <BirthdayContainer>
                    <BirthdayImage src="/assets/gift.png" />
                    <BirthdayText><strong>Tony Stark</strong> and <strong>2 other friends</strong> have their birthday today</BirthdayText>
                </BirthdayContainer>
                <AdvertismentImage src ="/assets/ad.png"/>
                <SubHeader>Online Friends</SubHeader>
                <FriendList>
                    {Users.map(user => {
                        return <OnlineFriends key={user.id} user={user}/>
                    })}   
                </FriendList>
            </Wrapper>
        </Container>
    )
}

export default Rightbar
