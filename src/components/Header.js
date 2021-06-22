import React from 'react';
import styled from 'styled-components';
import HeaderBar from './HeaderBar';
import ProfileImg from '../assets/profile.png';
import NavBar from '../components/NavBar';

const Header = () => {
    return (
        <>
        <HeaderBar/>
        <HeaderBlock>
            <LogoWrapper>
                <Logo></Logo>
                <Name></Name>
            </LogoWrapper>
            <NavBar />
            <LoginWrapper>
                <ProfileButton/>
                <LoginButton>로그인</LoginButton>
            </LoginWrapper>
            <HamburgerWrapper>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </HamburgerWrapper>
        </HeaderBlock>
        </>
    );
};

const HeaderBlock = styled.div`
    width: 95vw;
    height: 70px;
    padding: 0 2.5vw;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background: linear-gradient(145deg, #242aeb, #9b24eb);
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
    display: none;
  }
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
    cursor: pointer;
`;

const HamburgerWrapper = styled.div`
    width: 28px;
    height: 22px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    display: none;
    @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const Line = styled.div`
    border: 1px solid #000;
    width: 30px;
`;

export default Header;
