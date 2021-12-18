import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#f0f2f5;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:70%;
    height:70%;
    display:flex;

    @media only screen and (max-width:872px){
        flex-direction:column;
        justify-content:center;
        width:90%;
        height:90%;
    }
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media only screen and (max-width:872px){
        flex:none;  
        margin-bottom:5px;
    }
`

const Logo =  styled.h3`
    font-size:50px;
    font-weight:800;
    color:#1775ee;
    margin-bottom:10px;

    @media only screen and (max-width:872px){
        text-align:center; 
        font-size:40px;
    }
`

const Description = styled.span`
    font-size:24px;

    @media only screen and (max-width:872px){
        text-align:center;  
        font-size:18px;
    }
`

const Right = styled(Left)`
    @media only screen and (max-width:872px){
        margin-top:10px;
    }
`

const LoginContainer = styled.div`
    height:300px;
    padding:20px;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
    @media only screen and (max-width:872px){
        padding:10px;
    }
`

const Input = styled.input`
    height:50px;
    border-radius:5px;
    border:1px solid gray;
    font-size:18px;
    padding-left:20px;

    &:focus{
        outline:none;
    }

    @media only screen and (max-width:872px){
        font-size:24px;
    }
`

const LoginButton = styled.button`
    height:50px;
    border:none;
    background-color:#1775ee;
    border-radius:10px;
    cursor:pointer;
    color:white;
    font-size:20px;
    font-weight:500;

    @media only screen and (max-width:872px){
        font-size:26px;
    }
`

const InfoText = styled.span`
    text-align:center;
    color:#1775ee;

    @media only screen and (max-width:872px){
        font-size:18px;
    }
`

const RegisterButton = styled(LoginButton)`
    background-color:#42b72a;
    width:60%;
    align-self:center;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>JJSocial</Logo>
                    <Description>
                        Connect with friends and the world around you on JJSocial 
                    </Description>
                </Left>
                <Right>
                     <LoginContainer>
                        <Input type="email" placeholder ="Email"></Input>
                        <Input type="password" placeholder ="Password"></Input>
                        <LoginButton>Log in</LoginButton>
                        <InfoText>Forgot Password?</InfoText>
                        <RegisterButton>Create a New Account</RegisterButton>
                     </LoginContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Login
