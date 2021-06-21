import React from 'react';
import styled from 'styled-components';
import HeaderBar from './HeaderBar';
import ProfileImg from '../assets/profile.png';

const Header = () => {
    return (
        <>
        <HeaderBar/>
        <HeaderBlock>
            <LogoWrapper>
                <Logo></Logo>
                <Name></Name>
            </LogoWrapper>
            <Navigator>
                <NavContent>요금안내</NavContent>
                <NavContent>서비스</NavContent>
                <NavContent>고객지원</NavContent>
                <NavContent>견적문의</NavContent>
                <NavContent>공지/이벤트</NavContent>
            </Navigator>
            <LoginWrapper>
                <ProfileButton/>
                <LoginButton>로그인</LoginButton>
            </LoginWrapper>
        </HeaderBlock>
        </>
    );
};

const HeaderBlock = styled.div`
    width: 95vw;
    height: 70px;
        padding: 0 2.5vw;
    position: fixed;
    top: 50px;
    left: -2.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 2.5vw;
    color: #4a5568;
    font-weight: 500;
    background: #fff;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 120px;
    height: 40px;
    background: #C6FFDD;
    border-radius: 20px;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const Navigator = styled.div`
    display: flex;
`;

const NavContent = styled.div`
    padding: 0 15px;
`;

const LoginWrapper = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
`;

const ProfileButton = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    background-image: url(${ProfileImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease-in-out;  
    &:hover{
        transform: scale(1.07); 
    }
`;

const LoginButton = styled.div`
    width: 80px;
    height: 30px;
    color: #1b202c;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fafc;

`;


export default Header;