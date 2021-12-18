import React from 'react'
import styled from 'styled-components'

import Topbar from '../components/Topbar'
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

const ProfileContainer = styled.div`
    display:flex;
    width:100%;
    margin-bottom:20px;
`

const ProfileRight = styled.div`
    flex:9;
`

const ProfileTop = styled.div`

`

const ProfileCover = styled.div`
    height:320px;
    position:relative;
`

const CoverImage = styled.img`
    width: 100%;
    height:250px;
    object-fit:cover;
`

const ProfileImage = styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
    object-fit:cover;
    position:absolute;
    top:150px;
    left:0;
    right:0;
    margin:auto;
    border: 3px solid white;
`

const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Username = styled.h4`
    font-size:24px;
`

const UserDesc = styled.span`
    font-weight:300;
`

const ProfileBottom = styled.div`
    display:flex;
`

const Profile = () => {
    return (
        <>
            <Topbar/>
            <ProfileContainer>
                <Sidebar/>
                <ProfileRight>
                    <ProfileTop>
                        <ProfileCover>
                            <CoverImage src="/assets/post/3.jpeg" />
                            <ProfileImage src="/assets/person/1.jpeg" />
                        </ProfileCover>
                        <ProfileInfo>
                            <Username>Natasha Romanoff</Username>
                            <UserDesc>Wassup Guys!!!</UserDesc>
                        </ProfileInfo>
                    </ProfileTop>
                    <ProfileBottom>
                        <Feed/>
                        <Rightbar profile/>
                    </ProfileBottom>
                </ProfileRight>
            </ProfileContainer>
        </>
    )
}

export default Profile
