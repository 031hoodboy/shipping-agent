import React from 'react';
import styled from 'styled-components';

const CustomerService = () => {
    return (
        <CustomerServiceBlock>
            <GuidanceBlock>
                <Title>고객안내</Title>
                
            </GuidanceBlock>
            <NoticeBlock>
            <Title>공지사항</Title>
                <Ul>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                    <Li>공지사항 샘플텍스트입니다<Itag class="hidden-xs">2020/12/31</Itag></Li>
                </Ul>
            </NoticeBlock>
        </CustomerServiceBlock>
    );
};

const CustomerServiceBlock = styled.div`
    margin-top: 5vh;
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const GuidanceBlock = styled.div`
    font-weight: 500;
    width: 36vw;
    @media screen and (max-width: 512px) {
        width: 75vw;
  }
`;

const NoticeBlock = styled.div`
    width: 36vw;
    @media screen and (max-width: 512px) {
        width: 75vw;
  }
`;

const Title = styled.div`
    padding: 10px 0;
    font-size: 18px;
    color: #444;
    border-bottom: 1px soLid #e2e8f0;
    font-weight: 500;
`;

const Ul = styled.div`

`;

const Li = styled.div`
    text-decoration: none;
    color: #444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 13px;
`;

const Itag = styled.i`
    text-decoration: none;
    font-size: 11px;
    color: #9e9e9e;
`;

export default CustomerService;