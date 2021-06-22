import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return (
        <BannerBlock>
            <Title>배대지 배너</Title>
            <SubTitle>온라인으로 접수하고 빠른배송과 우체국배송 아니면 다른배송으로 물건에 이상없게</SubTitle>
        </BannerBlock>
    );
}

const BannerBlock = styled.div`
    width: 100vw;
    height: 100px;
    background: #4e5864;
    /* background: #4ec3c2; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    @media screen and (max-width: 512px) {
        font-size: 17px;
  }
`;

const SubTitle = styled.div`
    margin-top: 5px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    width: 80vw;
    @media screen and (max-width: 512px) {
        font-size: 13px;
  }
`;

export default Banner;