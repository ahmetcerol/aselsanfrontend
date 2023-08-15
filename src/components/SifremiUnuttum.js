import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import errorKeys from "../keys/errorKeys";
import { useNavigate } from 'react-router-dom';



const ForgotPassword = () => {
  const navigate = useNavigate();

  
  const [user, setUser] = useState({
  
    tcKimlikNo: "",
    eposta: "",
    authentication: ""
});

const [loginStatus, setLoginStatus] = useState('');
const [passwordStatus, setPasswordStatus] = useState('');
const [password, setNewPassword] = useState("");
const [confirmNewPassword, setConfirmNewPassword] = useState("");

const handleUpdatePassword = () => {
  if (password !== confirmNewPassword) {
    setLoginStatus('Yeni şifreler uyuşmuyor.');
    return;
  }

  const updatePasswordData = {
    tcKimlikNo: user.tcKimlikNo,
    password: password
  };

  axios.post("http://localhost:8080/updatePassword", updatePasswordData)
    .then(response => {
      setPasswordStatus(response.data);
      if (response.data === "Şifre başarıyla güncellendi !!!") {
        navigate('/SignIn')
    }
    })
    .catch(error => {
      console.error('Şifre güncelleme hatası:', error);
      setPasswordStatus('Şifre güncelleme başarısız! Lütfen tekrar deneyin.');
    });
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUser({ ...user, [name]: value });
};


const handlePassword = () => {
  axios.post("http://localhost:8080/forgotPassword", user)
    .then(response => {
        setLoginStatus(response.data);
        if (response.data === "Şifrenizi değiştirebilirsiniz") {
            console.error('aaa');
        }
    })
    .catch(error => {
        console.error('Giriş hatası:', error);
        setLoginStatus('Giriş başarısız! Lütfen bilgilerinizi kontrol edin.');
    });
};

  const [error, setError] = useState(null);

  const [randomNumber, setRandomNumber] = useState(null);
  const fetchRandomNumber = () => {
    axios.get('http://localhost:8080/api/generateRandomString')
      .then(response => {
        setRandomNumber(response.data);
        setError(null);
      })
      .catch(error => {
        console.error(errorKeys.errorVerificationCode, error);
        setError(errorKeys.errorVerificationCode);
        setTimeout(fetchRandomNumber, 5000); // 5 saniye sonra tekrar dene
      });
  };

   useEffect(() => {
    fetchRandomNumber(); // İlk çağrı
    }, []);
  
  return (
    <Container>
      <Content>
        <FixedIcon src="/images/a-yetenek.png" alt="a-Yetenek" />
        <Info>a-Yetenek Şifremi Unuttum</Info>
        <CTA>

        {loginStatus === "Şifrenizi değiştirebilirsiniz" ? (
              <CTA>
              <FormElements>
                <FormElementInfo>Yeni Şifre</FormElementInfo>
                <InputText type="password" placeholder="Şifre" value={password}
                onChange={(e) => setNewPassword(e.target.value)}/>
                <FormElementInfo>Yeni Şifre Tekrarı</FormElementInfo>
                <InputText type="password" placeholder="Şifre Tekrarı"  value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}/>
               
                <RowElements>
                  <StyledA href="/SignIn">
                    <span>Geri Dön</span>
                  </StyledA>
                  <StyledA onClick={handleUpdatePassword}>
                    <span>Şifremi Sıfırla</span>
                  </StyledA>
                  
                </RowElements>
                <LoginStatus>{passwordStatus}</LoginStatus> 

              </FormElements>
            </CTA>
            ) : (

          <FormElements>
            <FormElementInfo>T.C. Kimlik No</FormElementInfo>
            <InputText 
            type="text" 
            name="tcKimlikNo"
            value={user.tcKimlikNo}
            maxLength={11} 
            placeholder="T.C Kimlik Numarası"
            onChange={handleInputChange}
            />
            <FormElementInfo>E-posta Adresi</FormElementInfo>
            <InputText 
            type="email" 
            name="eposta"
            placeholder="E - Posta"
            value={user.eposta}
            onChange={handleInputChange}/>
           <RowElements> <FormElementInfo>Doğrulama Kodu</FormElementInfo>
           <InputText 
           type="text" 
           name="authentication"
           maxLength={8}
           placeholder="KOD"
           value={user.authentication}
           onChange={handleInputChange}/>
           {error ? (
      <LoginStatus>{error}</LoginStatus>
    ) : (
      <div>
        {randomNumber ? (
          <RandomNumberInfo>{randomNumber}</RandomNumberInfo>
        ) : (""
          
        )}
      </div>)}
            </RowElements>
            <RowElements>
              <StyledA href="/SignIn">
                <span>Geri Dön</span>
              </StyledA>
              <StyledA onClick={handlePassword}>
                <span>Şifremi Sıfırla</span>
              </StyledA>
                      <LoginStatus>{loginStatus}</LoginStatus> 

            </RowElements>
          </FormElements>)}
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const FixedIcon = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: auto;
  z-index: 10;
`;

const InputText = styled.input`
  margin-bottom: 5px;
  border-radius: 8px;
  width: 100%;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  color: #333;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #090382;
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5);
  }
`;


const FormElements = styled.div`
  max-width: 650px;
  width: 100%;
  text-align: left;
  margin-left: 170px;
  margin-top: 25px;

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-right: 100px;
    width: 50%;
  }
  
  ${InputText} {
    margin-top: 15px;
  }
`;



const RowElements = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 150px;
`;

const StyledA = styled.a`
  color: #000000;
  letter-spacing: 1.2px;
  font-size: 14px;
  border: 1px solid transparent;
  text-align: center;
  margin-right: 23px;
  margin-top: 30px;
  display: flex;

  span {
    color: #090382;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: #090382;
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
const FormElementInfo= styled.p`
color: #000000;
font-size: 14px;
font-weight: 1000;
text-align: left;
margin-right:20px;
margin-top:20px;
letter-spacing: 1px;

`;
const LoginStatus = styled.p`
    margin-left:30px;
    font-size: 14px;
    color: ${props => props.success ? "green" : "red"};
`;
const Content = styled.div`
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

const BgImage = styled.div`
  height: 100%;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/aselsan-eniyilerle-eniyiyerde.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Info = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 1000;
  margin: 0 0 24px;
  margin-top: 30px;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;


const CTA = styled.div `
max-width:650px;
width: 100%;
display: flex;
flex-direction: row;
`;

const RandomNumberInfo = styled.p`
    font-size: 14px;
    color: #003087;
    margin-left:20px;
    margin-top: 30px;
    font-weight: 700;
    display: inline-block;
    background-color:#19bfba;
    border-radius:20px;
    padding: 10px;
    text-align:center;
    user-select: none;

`;

export default ForgotPassword;
