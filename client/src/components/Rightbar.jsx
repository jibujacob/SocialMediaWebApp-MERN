import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    flex:3.5;
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
                    <Friend> 
                        <FriendProfileImageContainer>
                            <FriendProfileImage src="/assets/person/3.jpeg"/>
                            <FriendOnlineBadge/>
                        </FriendProfileImageContainer> 
                        <FriendName>Arya Stark</FriendName>
                    </Friend>

                    <Friend> 
                        <FriendProfileImageContainer>
                            <FriendProfileImage src="/assets/person/3.jpeg"/>
                            <FriendOnlineBadge/>
                        </FriendProfileImageContainer> 
                        <FriendName>Arya Stark</FriendName>
                    </Friend>

                    <Friend> 
                        <FriendProfileImageContainer>
                            <FriendProfileImage src="/assets/person/3.jpeg"/>
                            <FriendOnlineBadge/>
                        </FriendProfileImageContainer> 
                        <FriendName>Arya Stark</FriendName>
                    </Friend>

                    <Friend> 
                        <FriendProfileImageContainer>
                            <FriendProfileImage src="/assets/person/3.jpeg"/>
                            <FriendOnlineBadge/>
                        </FriendProfileImageContainer> 
                        <FriendName>Arya Stark</FriendName>
                    </Friend>

                    <Friend> 
                        <FriendProfileImageContainer>
                            <FriendProfileImage src="/assets/person/3.jpeg"/>
                            <FriendOnlineBadge/>
                        </FriendProfileImageContainer> 
                        <FriendName>Arya Stark</FriendName>
                    </Friend>
                </FriendList>
            </Wrapper>
        </Container>
    )
}

export default Rightbar
