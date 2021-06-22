import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <Navigator>
            <NavContent>요금안내</NavContent>
            <DropMenu >
                <NavContent type="trigger">서비스</NavContent>
                <Ul type="hover">
                    <Li><Link to="/" style={{textDecoration: 'none', color: "#4a5568"}}>menu1</Link></Li>
                    <Li><Link to="/" style={{textDecoration: 'none', color: "#4a5568"}}>menu2</Link></Li>
                    <Li><Link to="/" style={{textDecoration: 'none', color: "#4a5568"}}>menu3</Link></Li>
                </Ul>
            </DropMenu>
            <NavContent>고객지원</NavContent>
            <NavContent>견적문의</NavContent>
            <NavContent>공지/이벤트</NavContent>
        </Navigator>
    );
};

const Navigator = styled.div`
    display: flex;
    @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavContent = styled.div`
    padding: 15px;
    cursor: pointer;
    &:hover {
        color: #5d6b83;
    }
`;

const DropMenu = styled.div`
    display: flex;
    flex-direction: flex-end;
    &:hover {
        color: #5d6b83;
        >div {
          display: block;
      }
    }
`;

const Ul = styled.div`
    display: none;
    position: absolute;
    margin-top: 45px;
    padding: 20px 20px 10px 20px;
    text-decoration: none;
    flex-direction: flex-end;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 3px;
`;

const Li = styled.div`
    text-decoration: none;
    margin-bottom: 10px;
`;

export default NavBar;
