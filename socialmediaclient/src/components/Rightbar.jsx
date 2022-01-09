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

//Home Page Rightbar
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

//Profile Page Sidebar

const UsernameInfoTitle = styled.h4`
    font-size:18px;
    font-weight:500;
    margin-bottom:10px;
`

const UserInfo = styled.div`
    margin-bottom:30px;
`

const UserInfoItem = styled.div`
    margin-bottom:10px;
`

const UserInfoKey = styled.span`
    font-weight:500;
    margin-right:15px;
    color:#555;

`

const UserInfoValue = styled.span`
    font-weight:300;
`

const UserFriendsTitle = styled(UsernameInfoTitle)`

`

const UserFollowings = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Following = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    cursor:pointer;
`

const FollowingUserImage = styled.img`
    width:100px;
    height:100px;
    border-radius:5px;
    object-fit:cover;
    cursor:pointer;
`

const FollowingUsername = styled.span`

`

const Rightbar = ({profile}) => {

    const HomeRightBar = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <UsernameInfoTitle>User Information</UsernameInfoTitle>
                <UserInfo>
                    <UserInfoItem>
                        <UserInfoKey>City:</UserInfoKey>
                        <UserInfoValue>Delhi</UserInfoValue>
                    </UserInfoItem>
                    <UserInfoItem>
                        <UserInfoKey>From:</UserInfoKey>
                        <UserInfoValue>Kerala</UserInfoValue>
                    </UserInfoItem>
                    <UserInfoItem>
                        <UserInfoKey>Relationship:</UserInfoKey>
                        <UserInfoValue>Single</UserInfoValue>
                    </UserInfoItem>
                </UserInfo>
                <UserFriendsTitle>User Friends</UserFriendsTitle>
                <UserFollowings>
                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>

                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>

                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>

                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>

                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>

                    <Following>
                        <FollowingUserImage src="/assets/person/2.jpeg"/>
                        <FollowingUsername>Tom Hiddleston</FollowingUsername>
                    </Following>
                </UserFollowings>
            </>
        )
    }


    return (
        <Container>
            <Wrapper>
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </Wrapper>
        </Container>
    )
}

export default Rightbar
