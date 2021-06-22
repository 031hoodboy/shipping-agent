import React from 'react';
import styled from 'styled-components';
import Dollar from '../assets/dollar.png';
import CustomerService from '../components/CustomerService';

const SecondPage = () => {
    return (
        <SecondPageBlock>
            <Title>고객에게 최고의 경험을 주기 위하여 서비스를 개선합니다.</Title>
            <SubTitle>쉽게 이용하는 해외 배송대행 서비스</SubTitle>
            <CardWrapper>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
                <Card>
                    <LogoWrapper>
                        <CardLogo></CardLogo>
                    </LogoWrapper>
                    <CardTitle>고정비 No</CardTitle>
                    <CardText>월 부과되는 시스템 사용료,기본 관리비,품종 관리비가 없어요.서비스를 저렴하게 이용할 수 있어요.</CardText>
                </Card>
            </CardWrapper>
            <CustomerService/>
        </SecondPageBlock>
    );
};

const SecondPageBlock = styled.div`
    width: 60vw;
    padding: 20vh 20vw;
    background: #f9f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 512px) {
        padding: 10vh 20vw;
  }
`;

const Title = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  color: #342b40;
  @media screen and (max-width: 512px) {
    font-size: 34px;
  }
`;

const SubTitle = styled.div`
  margin-top: 30px;
  color: #4a5568;
  font-size: 20px;
  text-align: center;
  width: 50vw;
  @media screen and (max-width: 512px) {
    width: 80vw;
  }
`;

const CardWrapper = styled.div`
    width: 80vw;
    padding-top: 15vh;
    display: flex;
    align-items: space-between;
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 512px) {
        padding: 0;
  }
`;

const Card = styled.div`
    width: 240px;
    height: 170px;
    margin-top: 30px;
    border-radius: 15px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: flex-end;
    background: #ffffff;
    box-shadow:  5px 5px 12px #e8e8e8,
             -5px -5px 12px #ffffff;
`;

const LogoWrapper = styled.div`
    width: 48px;
    height: 48px;
    background: linear-gradient(to left, #8E2DE2, #4A00E0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardLogo = styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${Dollar});
    background: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
`;

const CardTitle = styled.div`
    font-size: 20px;
    color: #2d3748;
    font-weight: 700;
    margin: 20px 0 10px;
`;

const CardText = styled.div`
    font-size: 18px;
  color: #4a5568;
`;

export default SecondPage;