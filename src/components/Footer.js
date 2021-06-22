import React from 'react';
import styled from 'styled-components';

const FooterBcakgroundBlock = styled.div`
  padding: 3vh 0;
  background: #f4f4f4; 
`;

const FooterBlock = styled.div`
    margin: 0 auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CompanyName = styled.div`
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1vh;
`;

const Content = styled.div`
    color: #797979;
    font-size: 14px;
`;

const DevelopSpec = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
                <CompanyName>기업이름</CompanyName>
                <Content>대표: ㅁㅁㅁ</Content>
                <Content>주소: ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</Content>
                {/* <Content>연락처: 010-0000-0000</Content> */}
                <Content>사업자등록번호: ㅁㅁㅁ-ㅁㅁ-ㅁㅁㅁㅁㅁㅁ</Content>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}

export default DevelopSpec;