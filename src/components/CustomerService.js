import React from 'react';
import styled from 'styled-components';

const CustomerService = () => {
    return (
        <CustomerServiceBlock>
            <GuidanceBlock>
                <Title>고객안내</Title>
                <Contact>
                    연락처 & 근무시간안내
                </Contact>
                <Ul>
                    <ContactMethod>안내전화: <Tel>010-1234-1234</Tel></ContactMethod>
                    <ContactMethod>팩스번호: <Tel>02-1234-1234</Tel></ContactMethod>
                    <ContactMethod>업무시간: <Tel>평일 9:00 - 18:00</Tel><Itag>(주말, 공휴일 휴무)</Itag></ContactMethod>
                    <ContactMethod>전화업무: <Tel>오전 9:00 - 오후 5:00</Tel><Itag>(전화업무시간 외에는 게시판을 이용해 주세요.)</Itag></ContactMethod>
                </Ul>
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
    margin-top: 10vh;
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
        margin-top: 5vh;
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

const Contact = styled.div`
    display: inline-block;
    padding: 10px;
    font-size: 13px;
    font-weight: 600;
    color: #3b00b3;
    margin-top: 20px;
    border: 1px solid #3b00b3;
    border-bottom: none;
`;

const ContactMethod = styled.li`
    display: flex;
    padding: 15px 0;
    border-top: 1px solid #e2e8f0;
    align-items: center;
    &:last-child {
    border-bottom: 1px solid #e2e8f0;
    }
    color: #444;
    font-size: 12px;
`;

const Tel = styled.div`
    margin: 0 10px;
    color: #3b00b3;
    font-size: 16px;
    font-weight: 600;
`;

export default CustomerService;