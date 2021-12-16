import React from 'react'
import styled ,{css} from 'styled-components'

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Container = styled.div`
    width:100%;
    height:170px;
    border-radius:10px;

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
`

const Wrapper = styled.div`
    padding:10px;
`

const Top = styled.div`
    display:flex;
    align-items:center;
`

const ProfileImage = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
    object-fit:cover;
    margin-right:10px;
`

const Input = styled.input`
    border:none;
    width:80%;

    &:focus{
        outline:none;
    }
`

const Hr = styled.hr`
    margin:20px;
`

const Bottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Options = styled.div`
    display:flex;
    margin-left:20px;
`
const Option = styled.div`
    display:flex;
    align-items:center;
    margin-right:15px;
    cursor:pointer;
`

const ShareIconStyle = css`
    font-size:18px !important;
    margin-right:5px;
`

const PermMedia = styled(PermMediaIcon)`
    ${ShareIconStyle};
`

const Label = styled(LabelIcon)`
    ${ShareIconStyle}
`

const Room = styled(RoomIcon)`
    ${ShareIconStyle}
`

const EmojiEmotions = styled(EmojiEmotionsIcon)`
    ${ShareIconStyle}
`

const OptionText = styled.span`
    font-size:14px;
    font-weight:500;
`

const Button = styled.button`
    border:none;
    padding:7px;
    border-radius:5px;
    background-color:green;
    color:white;
    cursor:pointer;
`

const Share = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <ProfileImage src="/assets/person/1.jpeg"/>
                    <Input placeholder="What's in you mind Natasha?"/>
                </Top>
                <Hr/>
                <Bottom>
                    <Options>
                        <Option>
                            <PermMedia htmlColor='tomato'/>
                            <OptionText>Photo/Video</OptionText>
                        </Option>

                        <Option>
                            <Label htmlColor='blue'/>
                            <OptionText>Tag</OptionText>
                        </Option>

                        <Option>
                            <Room htmlColor='green'/>
                            <OptionText>Location</OptionText>
                        </Option>

                        <Option>
                            <EmojiEmotions htmlColor='goldenrod'/>
                            <OptionText>Feeling</OptionText>
                        </Option>
                    </Options> 
                    <Button>Share</Button>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Share
