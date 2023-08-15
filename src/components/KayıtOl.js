import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import errorKeys from "../keys/errorKeys";
import { useNavigate } from 'react-router-dom';



const SignUp = ({ isLoggedIn, setIsLoggedIn }) => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18); // Bugünden 18 yıl çıkar
  const maxBirthDate = today.toISOString().split('T')[0]; // 18 yıl önceki tarih
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
        setTimeout(fetchRandomNumber, 5000); // 15 saniye sonra tekrar dene
      });
  };

   useEffect(() => {
    fetchRandomNumber(); // İlk çağrı
    },[]);
  
    const [formData, setFormData] = useState({
      nationality: "Türkiye Cumhuriyeti", // Default value for nationality
      tcKimlikNo: "",
      eposta: "",
      ad: "",
      soyad: "",
      birthDate: "",
      password: "",
      authentication: "",
    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  };
const [loginStatus, setLoginStatus] = useState('');
const navigate = useNavigate();

    const handleSubmit = () => {
      axios.post("http://localhost:8080/api/kisi", formData)
        .then((response) => {
         if(response.status ===200){
          setLoginStatus(response.data);
         setIsLoggedIn(true);
         navigate('/veri');
         }
        })
        .catch((error) => {
           setIsLoggedIn(false);
          setLoginStatus('Kayıt başarısız! Lütfen bilgilerinizi kontrol edin.');
        });
    };
    

  
  return (
    <Container>
      <Content>
        <Form>
          <FormGroup>
            <FormElement>
              <FormElementLabel>Uyruk</FormElementLabel>
              <Saelect value={formData.nationality} onChange={handleInputChange}>
                <option value={"Türkiye Cumhuriyeti"}>Türkiye Cumhuriyeti</option>
                <option value={"Diğer"}>Diğer</option>
              </Saelect>
            </FormElement>
            <FormElement>
              <FormElementLabel>TC Kimlik No</FormElementLabel>
              <InputText
              type="text" 
              name="tcKimlikNo" 
              value={formData.tcKimlikNo} 
              maxLength={11} 
              placeholder="T.C Kimlik Numarası" 
              onChange={handleInputChange}/>
            </FormElement>
          </FormGroup>
          <FormGroup>
            <FormElement>
              <FormElementLabel>E-posta</FormElementLabel>
              <InputText type="email" 
              name="eposta" 
              placeholder="E - Posta"
              value={formData.eposta}
              onChange={handleInputChange}
               />
            </FormElement>
            <FormElement>
              <FormElementLabel>Ad</FormElementLabel>
              <InputText type="text" 
              name="ad" 
              placeholder="Ad"
              value={formData.ad}
              onChange={handleInputChange}/>
            </FormElement>
            <FormElement>
              <FormElementLabel>Soyad</FormElementLabel>
              <InputText type="text" 
              name="soyad" 
              placeholder="Soyad"
              value={formData.soyad}
              onChange={handleInputChange}/>
            </FormElement>
          </FormGroup>
          <FormGroup>
            <FormElement>
              <FormElementLabel>Doğum Tarihi</FormElementLabel>
              <InputText type="date" 
              name="birthDate" 
              max={maxBirthDate} 
              value={formData.birthDate}
              onChange={handleInputChange}/>
            </FormElement>
            <FormElement>
              <FormElementLabel>Şifre</FormElementLabel>
              <InputText type="password" 
              name="password" 
              placeholder="Şifre"
              value={formData.password}
              onChange={handleInputChange}
              />
            </FormElement>
            <FormElement>
              <FormElementLabel>Şifre Tekrarı</FormElementLabel>
              <InputText type="password" name="passwordConfirmation" placeholder=" Tekrar "/>
            </FormElement>
            <FormElement>
            <FormElementLabel>Doğrulama Kodu</FormElementLabel>
            <InputText type="text" 
            name="authentication" 
            maxLength={8} 
            placeholder=" Kod"
            value={formData.authentication}
            onChange={handleInputChange}/>
            </FormElement>
          </FormGroup>
          {error ? (
      <LoginStatus>{error}</LoginStatus>
    ) : (
      <div>
        {randomNumber ? (
          <RandomNumberInfo>{randomNumber}</RandomNumberInfo>
        ) : ( ""
        )}
      </div>)}
         
        
          <Welcome onClick={handleSubmit}>Kayıt Ol</Welcome>
          <LoginStatus>{loginStatus}</LoginStatus> 
        </Form>
        <StyledA href="/SignIn"><span>Hesabın var mı ? Giriş Yap!</span></StyledA>
        <FixedIcon src="/images/a-yetenek.png"/>
      </Content>
      <BgImage />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  margin-top:20px;
`;



const Form = styled.div`
  max-width: 650px;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FormElement = styled.div`
  flex: 1;
  margin-right: 20px;
  margin-bottom: 20px;
  

  @media (max-width: 768px) {
    flex: 100%;
    margin-right: 0;
  }
`;

const FormElementLabel = styled.label`
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Saelect = styled.select`
  height: auto;
  margin-top:35px;
  width: 100%; /* Adjust width */
  padding: 12px 16px; /* Add padding for better spacing */
  border-radius: 8px;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  font-size: 16px; /* Increase font size for better readability */
  background-color: #f9f9f9; /* Add a light background color */
  border: 1px solid #ccc; /* Add a light border */
  color: #333; /* Set text color */
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transitions */

  &:focus {
    outline: none;
    border-color: #090382; /* Change border color on focus */
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5); /* Add a subtle box shadow on focus */
  }
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
  margin-top: 35px;
  border-radius: 8px;
  width: 100%;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 12px 16px; /* Add padding for better spacing */
  font-size: 16px; /* Increase font size for better readability */
  background-color: #f9f9f9; /* Add a light background color */
  border: 1px solid #ccc; /* Add a light border */
  color: #333; /* Set text color */
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transitions */

  &:focus {
    outline: none;
    border-color: #090382; /* Change border color on focus */
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5); /* Add a subtle box shadow on focus */
  }
`;

const Welcome = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #090382;
  letter-spacing: 2px;
  font-size: 14px;
  margin-left: 250px;
  padding: 10px 20px; 
  border: 1px solid transparent;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
 user-select: none;
 
  &:hover {
    background-color: #3d78c4;
  }
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
  opacity: 0.7;
`;

const StyledA= styled.a`
color: #000000;
letter-spacing: 1.2px;
font-size: 13px;
border: 1px solid transparent;
text-align:center;
font-weight: 700;
margin-right: 23px;
margin-top: 20px;

display:flex;

span {color:#f9f9f9;
      white-space: nowrap;
      position:relative;
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
      }}
&:hover {
  span: before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
   
  }
 
}
`;

const RandomNumberInfo = styled.p`
    font-size: 14px;
    color: #003087;
    font-weight: 700;
    position: fixed;
    margin-left: 520px;
    width: 100px;
    height: auto;
    z-index: 10;
    background-color:#19bfba;
    border-radius:20px;
    padding: 10px;
    margin-top:0;
    text-align:center;
    user-select: none;

`;
const LoginStatus = styled.p`
    margin-top: 15px;
    margin-left:110px;
    font-size: 14px;
    color: ${props => props.success ? "green" : "red"};
`;
export default SignUp;
