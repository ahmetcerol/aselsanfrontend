import React from "react";
import styled from "styled-components";
import aselsanKültürKey from "../keys/AselsanKültürKey";

const AselsanKültür = (props) => {
    return (
        <Container>
           
            <Content>
                <CTA>
                    <PageTitle>{aselsanKültürKey.pageTitle}</PageTitle>
                    <PageInfo>{aselsanKültürKey.pageInfo}</PageInfo>
                </CTA>
                <FixedIcon src="/images/aselsan-logo.png" alt="Aselsan Logo" />
            </Content>
            <BgImage />
        </Container>
    );
}

const Container = styled.section`

`;

const BgImage = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/merhabalar.jpg");
    background-size: cover;
    background-position:bottom;
    filter: brightness(0.6);
    z-index: -1;
`;

const Content = styled.div`
    width: 80%;
    max-width: 1200px;
    padding: 40px;

    margin: 0 auto;
`;

const CTA = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 50%;
    margin-top:100px;
    margin-bottom: 50px;
    position: relative;
    overflow: hidden;
`;

const PageTitle = styled.h1`
    color: #003087;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
    position: relative;
`;

const PageInfo = styled.p`
    color: #333;
    font-size: 18px;
    line-height: 1.6;
    text-indent: 20px;
`;

const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    z-index: 10;
`;

export default AselsanKültür;
