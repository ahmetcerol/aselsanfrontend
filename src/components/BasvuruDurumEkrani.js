import { styled } from "styled-components";
import { Navigate } from 'react-router-dom'; 
import { useUser } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const BaşvuruDurumEkrani =  ({tcKimlik, isLoggedIn}) => {
    
    if (!isLoggedIn) {
        return <Navigate to="/SignIn" />;
    }
    
    return (
        <Container>
            <Content>
                <Section>
                    <Description>
                          Merhaba; başvuru durumunuz aşağıda belirtildiği şekildedir. Değerlendirma aşamalarımız devam etmekte olup, en kısa sürede sizlere geri dönüş sağlayacağımızı
                        bildirmek isteriz.  
                    </Description>
                    <Description>
                        Başvuru durumu;    
                    </Description>      
                </Section>
                <Section>
                    <Welcome href="/">Çıkış Yap!</Welcome>
                </Section>
                <FixedIcon src="/images/ASELSAN_logo.svg"/>
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
    border-radius: 0 0 24px 24px;
`;
const Section = styled.div`
    margin-bottom: 40px;
`;

const Welcome = styled.a`
color: #f9f9f9;
background-color: #090382;
width: 100%;
margin-left: 1000px;
letter-spacing: 2px;
font-size: 12px;
padding: 14px 12px;
border: 1px solid transparent;
border-radius: 100px;
text-align: center;
user-select: none;


&:hover {
    background-color: #3d78c4;
}
`;
const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    text-indent:20px;
`;
const İmportant = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #fc030f;
    text-indent:20px;
`;
const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;

export default BaşvuruDurumEkrani;