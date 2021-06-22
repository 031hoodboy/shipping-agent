import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import SecondPage from './pages/SecondPage';

const Home = () => {
  return (
    <>
      <Header/>
      <HomeBlock>
        <Title>우리 배송대행지는 빠르고<br/> 정확하며 편리합니다.</Title>
        <SubTitle>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</SubTitle>
        <ButtonWrapper>
          <RegisterButton>신청서 작성하기  ➞</RegisterButton>
          <SignupButton>회원가입</SignupButton>
        </ButtonWrapper>
      </HomeBlock>
      <Banner/>
      <SecondPage/>
    </>
  )
};

const HomeBlock = styled.div`
  width: 100vw;
  height: 90vh;
  /* height: calc(100vh + 120px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 512px) {
    height: 80vh;
  }
`;

const Title = styled.div`
  font-size: 64px;
  text-align: center;
  font-weight: 700;
  color: #342b40;
  @media screen and (max-width: 512px) {
    font-size: 34px;
  }
`;

const SubTitle = styled.div`
  margin-top: 10px;
  color: #4a5568;
  font-size: 20px;
  text-align: center;
  width: 50vw;
  @media screen and (max-width: 512px) {
    width: 80vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  font-size: 22px;
  font-weight: 600;
  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;

const RegisterButton = styled.div`
  padding: 0 20px;
  height: 64px;
  background: linear-gradient(to right, #453ae4, #673ae4);
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

const SignupButton = styled.div`
  padding: 0 20px;
  height: 64px;
  margin-left: 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1b202c;
  background-color: #f9fafc;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  &:hover{
    background: #f9fafc;
  }
  @media screen and (max-width: 512px) {
    width: 80vw;
    margin: 0;
    margin-top: 20px;
  }
`;

export default Home;