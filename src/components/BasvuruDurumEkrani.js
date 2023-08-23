import { styled } from "styled-components";
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";



const BaşvuruDurumEkrani =  ({tcKimlik, isLoggedIn}) => {
    const [applicationStatus, setApplicationStatus] = useState({ isApproved: null });

    const fetchApplicationStatus = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/approve/${tcKimlik}`);
            setApplicationStatus(response.data);
            console.error(response.data);
        } catch (error) {
            console.error("Başvuru durumu çekme hatası:", error);
        }
    };
    useEffect(() => {
        fetchApplicationStatus();
    }, []);

    if (!isLoggedIn) {
        return <Navigate to="/SignIn" />;
    }

    const getStatusText = () => {
        if (applicationStatus.approved === null) {
            return "Başvurunuz henüz değerlendirme aşamasındadır. Her bilginizi dikkatli bir şekilde incelediğimizi bilmenizi isteriz. En kısa sürede sizlere geri dönüş yapacağız.";
        } else if (applicationStatus.approved === true) {
            return "Başvurunuz onaylanmıştır. En kısa sürede sizlere yapmanız gereken işlemleri bilgilendirme maili olarak ileteceğiz. Tebrik ederiz ! Aramıza hoş geldiniz.";
        } else {
            return "Değerli adayımız; Aselsan a-Yetenek programına göstermiş olduğun ilgi için teşekkür ederiz. Maalesef a-Yetenek başvurunuza olumlu geri dönüş yapamadığımızı belirtmek isteriz. \n";
        }
    };
    
    return (
        <Container>
            <Content>
                <Section>
                    <Description>
                        Merhaba; başvuru durumunuz aşağıda belirtildiği şekildedir.
                    </Description>
                    <Description>
                        Başvuru durumu:
                        <StatusText>{getStatusText()}</StatusText>
                    </Description>
                </Section>
                <Section>
                    <Welcome href="/">Çıkış Yap!</Welcome>
                </Section>
                <FixedIcon src="/images/ASELSAN_logo.svg" />
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
`;const StatusText = styled.p`
font-weight: bold;
margin-top: 10px;
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