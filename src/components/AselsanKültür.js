import {styled} from "styled-components";
import aselsanKültürKey from "../keys/AselsanKültürKey";

const AselsanKültür = (props) => {

    return (
    
    <Container>
        <Content>
            <CTA>
                <ParagrafBaşlık>{aselsanKültürKey.pageTitle}</ParagrafBaşlık>
                <ParagrafIçerik>{aselsanKültürKey.pageInfo}</ParagrafIçerik>
            </CTA>
            <FixedIcon src="/images/aselsan-logo.png"/>
        </Content>
        <BgImage/>
    </Container>);
    
}


const Container = styled.section`
 overflow: hidden;
 display: flex;
 flex-direction: column;
 text-align: center;
 height: 100vh;
 
`;
const BgImage = styled.div `
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/aselsan-manifest.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;
const Content = styled.div `
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: top;
align-items: center;
flex-direction: column;
padding-top: 70px;
height: 100%;
`;
const CTA = styled.div`
 width: 100%;
 background-color: #f9f9f9;
 display: flex;
 flex-direction: column;
 border-radius: 0 0 34px 34px;
`;
const ParagrafBaşlık =styled.h3`
color: #003087;
text-align: center;
font-size: 16px;
font-weight: 700;
margin-left: 20px;
letter-spacing: 5px;
`;
const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;
const ParagrafIçerik= styled.p`
color: #003087;
text-align: left;
font-size: 13px;
margin-left: 25px;
margin-right: 25px;
letter-spacing: 1px;
line-height: 30px;
text-indent:20px;
`;

export default AselsanKültür;