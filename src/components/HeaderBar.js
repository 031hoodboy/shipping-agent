import React from 'react';
import styled from 'styled-components';

const HeaderBar = () => {
    return(
        <HeaderBarBlock>
            <Content>빠르고 정확한 배송을 원한다면 ㅇㅇㅇ을 이용하세요</Content>
            <Button>신청하기</Button>
        </HeaderBarBlock>
    );
};

const HeaderBarBlock = styled.div`
    position: fixed;
    width: 100vw;
    height: 50px;
    background: linear-gradient(to left, #8E2DE2, #4A00E0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;

`;

const Content = styled.div`
`;

const Button = styled.div`
    border-radius: 3px;
    padding: 5px 20px;
    margin-left: 20px;
    background: #5c1cab;
    cursor: pointer;
`;

export default HeaderBar;