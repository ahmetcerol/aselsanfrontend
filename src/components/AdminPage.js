import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; 


const AdminPage = ({ isLoggedIn }) => {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [status, setStatus] = useState("");


    useEffect(() => {fetchUserData();}, []);


    const handleCardClick = async (tcKimlikNo) => {
        try {
            const response = await axios.get(`http://localhost:8080/listeleme/${tcKimlikNo}`);
            setSelectedUser(response.data);
        } catch (error) {
            console.error('Kullanıcı bilgileri çekme hatası:', error);
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/getData');
            setUserData(response.data);
            console.error(response.data);
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    };

    const updateApplicationStatus = async (tcKimlikNo, approved) => {
        try {
            await axios.post(`http://localhost:8080/${tcKimlikNo}/approve`, { approved });
            setStatus("İşlem başarılı bir şekilde gerçekleşti !");
            setTimeout(() => {
               
               setSelectedUser("");
            }, 2500);
        } catch (error) {
            console.error('Başvuru durumu güncelleme hatası:', error);
        }
    };

    const UserInfoCard = styled.div`
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  
   

   
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


    const UserInfo = styled.p`
        color: #003087;
        margin-right: 20px; 
        margin-bottom: 20px;
    `;

    if (!isLoggedIn) {
        return <Navigate to="/SignIn" />;
      }

    return (
        <Container>
            <Content>
            <BgImage />
                <Section>
                    <Description>
                        Merhabalar; başvuranların bilgileri şu şekildedir;
                    </Description>
                    <CardsContainer >
                        {userData.map((user, index) => (
                            <UserInfoCard key={index}  onClick={() => handleCardClick(user.tcKimlikNo)} >
                                <UserInfo>Ad: {user.ad}</UserInfo>
                                <UserInfo>Soyad: {user.soyad}</UserInfo>
                                <UserInfo>Tc Kimlik No: {user.tcKimlikNo}</UserInfo>
                                <UserInfo>E-Posta: {user.eposta}</UserInfo>
                            </UserInfoCard>
                        ))}
                    </CardsContainer>
                </Section>
                <Section>
                    <Welcome href="/">Çıkış Yap!</Welcome>
                </Section>
                <FixedIcon src="/images/aselsan-logo.png" />
            </Content>
            <ContainerSection>
            {selectedUser && (
                <SelectedUserContainer>
                    <UserInfo>Ad: {selectedUser.ad}</UserInfo>
                    <UserInfo>Soyad: {selectedUser.soyad}</UserInfo>
                    
                    
                    <StajBilgileriContainer>
                    {selectedUser.stajBilgileri.map((staj, index) => (
                            <div key={index}>
                                <UserInfo>Staj Yeri: {staj.stajYeri}</UserInfo>
                                <UserInfo>Staj Bölümü: {staj.stajBölümü}</UserInfo>
                                <UserInfo>Staj Süresi: {staj.stajSüresi}</UserInfo>
                                <UserInfo>Staj Türü: {staj.stajTürü}</UserInfo>
                               
                            </div>
                        ))}
                                                </StajBilgileriContainer>
                                                <StajBilgileriContainer>
                      <UserInfo>Eğitim Bilgileri</UserInfo>
                        {selectedUser.egitimBilgilerim.map((egitim, index) => (
                            <div key={index}>
                                <UserInfo>Okul Adı: {egitim.okulAdi}</UserInfo>
                                <UserInfo>Bitiş Tarihi: {egitim.finishDate}</UserInfo>
                                
                            </div>
                        ))}  </StajBilgileriContainer> <StajBilgileriContainer>
                    <UserInfo>Proje Deneyimleri</UserInfo>
                        {selectedUser.projeDeneyimleri.map((proje, index) => (
                            <div key={index}>
                                <UserInfo>Proje Adı: {proje.projeAdi}</UserInfo>
                                <UserInfo>Proje Kurumu: {proje.projeKurum}</UserInfo>
                                <UserInfo>Proje Detayı: {proje.projeDetay}</UserInfo>
                            </div>
                        ))} </StajBilgileriContainer>
                    <Deny onClick={() => updateApplicationStatus(selectedUser.tcKimlikNo, false)}>Başvuruyu Reddet!</Deny>
                    <Accept onClick={() => updateApplicationStatus(selectedUser.tcKimlikNo, true)}>Başvuruyu Kabul Et!</Accept>
                    <İmportant>{status}</İmportant>
                </SelectedUserContainer>
            )}
           </ContainerSection>
        </Container>
    );
};

const Container = styled.div`
`;
const ContainerSection = styled.div`
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    margin-top: 20px;
    border-radius: 0 0 24px 24px;
    min-height: 100vh; /* Set minimum height to cover the whole viewport */
    display: flex;
    flex-direction: column;
   
    `;
const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/aselsan-eniyilerle-eniyiyerde.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;
const Section = styled.div`
    margin-bottom: 40px;
`;const StajBilgileriContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 15px;
`;


const Welcome = styled.a`
    color: #f9f9f9;
    background-color: #090382;
    letter-spacing: 2px;
    font-size: 12px;
    padding: 14px 12px;
    border: 1px solid transparent;
    border-radius: 100px;
    text-align: center;
    user-select: none;
    right: 20px;
    position: absolute;
    margin-top: -50px;
    &:hover {
        background-color: #3d78c4;
    }
`;

const Accept = styled.a`
color: #f9f9f9;
background-color: #090382;

letter-spacing: 2px;
font-size: 12px;
padding: 14px 12px;
border: 1px solid transparent;
border-radius: 100px;
text-align: center;
user-select: none;
margin-top: -25px;
position: absolute;
right: 20px;

&:hover {
    background-color: #3d78c4;
}
`;
const İmportant = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #03fc35;
    text-indent:20px;
`;
const Deny = styled.a`
color: #f9f9f9;
background-color:#820303;

letter-spacing: 2px;
font-size: 12px;
padding: 14px 12px;
border: 1px solid transparent;
border-radius: 100px;
text-align: center;
user-select: none;
margin-top: -25px;
position: absolute;
right: 200px;

&:hover {
    background-color: #c43d3d;
}
`;

const SelectedUserContainer = styled.div`
padding: 30px;
margin: 10px;
border-radius: 8px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
background-color: #fff;
transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

`;


const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    text-indent: 20px;
`;

const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;

export default AdminPage;
