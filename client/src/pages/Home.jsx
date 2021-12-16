import React from 'react'
import styled from "styled-components"

import Topbar from '../components/Topbar'
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

const BodyContainer = styled.div`
    display:flex;
    width:100%;
`

const Home = () => {
    return (
        <>
            <Topbar/>
            <BodyContainer>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </BodyContainer>
        </>
    )
}

export default Home
