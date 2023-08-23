import React from "react";
import styled from "styled-components";
import aTikKeys from "../keys/AtikKeys";

const ATik = () => {
    return (
        <Container>
            <Content>
                <Section>
                    <Title>{aTikKeys.pageTitle}</Title>
                    <Description>{aTikKeys.pageDescription}</Description>
                </Section>

                <Section>
                    <Description>{aTikKeys.atikDescription}</Description>
                    
                    <Title>{aTikKeys.atikDatesTitle}</Title>
                    <Description>{aTikKeys.atikDatesInfo}</Description>
                    
                    <Title>{aTikKeys.atikApplyAppTitle}</Title>
                    <Description>
                        <Link href="https://vizyonergenc.com/"  target="_blank" rel="noreferrer">www.vizyonergenc.com</Link>
                        <br/><br/>{aTikKeys.atikApplyDescription}
                    </Description>
                </Section>

                <FixedIcon src={aTikKeys.atikImage}/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f9f9f9;
    border-radius:0 0 24px 24px;
`;
const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    margin-top:70px;
`;
const Section = styled.div`
    margin-bottom: 40px;
`;
const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #003087;
`;
const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    text-indent:20px;
`;
const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
    background-color: #f9f9f9;
    border-radius: 10px;
`;
const Link = styled.a`
    font-size: 16px;
    color: #003087;
    text-decoration: underline;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #0258f7;
    }
`;

export default ATik;