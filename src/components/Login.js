import styled from "styled-components";


const Login = (props) => {

return (
    <Container>
        <Content>
            <CTA>
                <CtaLogo src="/images/ASELSAN_logo.svg" alt="ASELSAN" />
                <Welcome href="/signIn">a-Yetenek Giriş</Welcome>
                <Description>
                a-Yetenek, genç yeteneklerin iş hayatına başlamadan önce mesleki yeterlilik ve yetkinlikler açısından kendilerini geliştirmeleri ve ASELSAN kültürünü tanıyarak çalışma hayatına adım atmalarını amaçlayan
                 ve mentorlük çalışmalarıyla adayların kariyer gelişimlerini destekleyen bir yetenek programıdır.
                </Description>
                <RowElements>
                    <CTALogoTwo src="/images/a-gelecek.png"/>
                    <CTALogoTwo src="/images/atik.png"/>
                    <CTALogoTwo src="/images/a-yetenek.png"/>
                </RowElements>
         </CTA>
            <BgImage />
            <FixedIcon src="/images/aselsan-logo.png" />
        </Content>
    </Container>
);}

const Container = styled.section `
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div `
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;
const BgImage = styled.div `
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/aselsan-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;
const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;
const CtaLogo = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
const Welcome = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #090382;
margin-bottom: 12px;
width: 70%;
margin-left: 75px;
letter-spacing: 2px;
font-size: 14px;
padding: 10.5px 0;
border: 1px solid transparent;
border-radius: 100px;

&:hover {
    background-color: #3d78c4;
}
`;
const Description = styled.p`
color: #f9f9f9;
font-size: 13px;
font-weight: 700;
margin: 0 0 24px;
letter-spacing: 0.5px;
line-height: 1.5;
`;
const RowElements= styled.div`
flex-direction: row;
display: flex;
margin-left: 50px;
align-items:center;
`;
const CTALogoTwo = styled.img`
  max-width: 100px;
  margin-left: 55px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;

export default Login;