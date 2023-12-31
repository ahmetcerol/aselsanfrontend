import styled from "styled-components";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import errorKeys from "../keys/errorKeys";
import { useUser } from "../context/UserContext";

const SignIn = ({ isLoggedIn, setIsLoggedIn, tcKimlik, setTcKimlik }) => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [loginStatus, setLoginStatus] = useState('');
  const {tcKimlikNo,setTcKimlikNo} = useUser();
  const [password, setPassword] = useState();

  const [user, setUser] = useState({
    nationality: 'Türkiye Cumhuriyeti',
    tcKimlikNo: '',
    password: '',
    authentication: ''
});
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setTcKimlikNo(user.tcKimlikNo);
    setPassword(user.password);
};
const handleAdmin = () => {

  if(tcKimlikNo === "admin" && password === "admin") {
    setIsLoggedIn(true);
    navigate("/AdminPage");
  }else {
    handleLogin();
  }

}
const handleDurum = () => {
  axios.get(`http://localhost:8080/isUserActive/${tcKimlikNo}`)
  .then(response => {
    if(response.data === true){
      setIsLoggedIn(true);
      setTcKimlik(tcKimlikNo);
      console.error(tcKimlikNo);
      navigate('/BaşvuruDurum');
    }
    else{navigate('/veri');}
  }).catch(error => {
    console.error("Aktiflik kontrolü yapılamadı",error);
  })
}

const handleLogin = () => {
  axios.post('http://localhost:8080/login', user)
    .then(response => {
        setLoginStatus(response.data); // API'den dönen veriyi duruma kaydediyoruz
        if (response.data === "Giriş başarılı!") {
          // Giriş başarılı ise, diğer sayfaya yönlendir
          setIsLoggedIn(true);
          handleDurum();
        }
    })
    .catch(error => {
        console.error('Giriş hatası:', error);
        setIsLoggedIn(false);
        setLoginStatus('Giriş başarısız! Lütfen bilgilerinizi kontrol edin.');
    });
};
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
  fetchRandomNumber(); 
  }, []);

    return (
        <Container>
            <Content>
              <Info>a-Yetenek Başvuru Uygulaması Giriş Ekranı</Info>
              <FixedIcon src="/images/a-yetenek.png"/>
                <CTA>
                  
                  <FormElements>
                        <FormElementInfo>Uyruk</FormElementInfo>
                        <FormElementInfo>T.C. Kimlik No</FormElementInfo> 
                        <FormElementInfo>Şifre</FormElementInfo>
                        <FormElementInfo>Doğrulama Kodu</FormElementInfo>
                  </FormElements>
                  
                  <FormElements>
                  <Saelect
                    name="nationality"
                    value={user.nationality}
                    onChange={handleInputChange}>
                                <option value={"Türkiye Cumhuriyeti"}>Türkiye Cumhuriyeti</option>
                                <option value={"Diğer"}>Diğer</option>
                        </Saelect>
                       
                        <InputText
                    type="text"
                    name="tcKimlikNo"
                    placeholder="T.C Kimlik Numarası"
                    value={user.tcKimlikNo}
                    maxLength={11}
                    onChange={handleInputChange}
                />
              
                <InputText
                    type="password"
                    name="password"
                    placeholder="Şifre"
                    value={user.password}
                    onChange={handleInputChange}
                    
                />
                <RowElements>
                <InputText
                    type="text"
                    name="authentication"
                    placeholder="Kod"
                    maxLength={8}
                    value={user.authentication}
                    onChange={handleInputChange}
                
                />
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
                          <StyledA href="/ForgotPassword"><span>Şifremi Unuttum</span></StyledA>
                          <StyledA href="/SignUp"><span>Yeni Kayıt</span></StyledA>
                        </RowElements>
                        <Welcome onClick={handleAdmin} > Giriş Yap</Welcome>
                        <LoginStatus>{loginStatus}</LoginStatus> 

                  </FormElements>
  
                </CTA>
              <BgImage/>

            </Content>
        </Container>
    );
}


const Container = styled.section `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;
const Saelect = styled.select`
  height: auto;
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
const LoginStatus = styled.p`
    margin-top: 15px;
    margin-left:15px;
    font-size: 14px;
    color: ${props => props.success ? "green" : "red"};
`;
const FormElements = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-left: 170px;
  margin-top: 25px;
  
  @media (max-width: 768px) {
    margin-left: 50px;
    margin-right: 100px;
    width: 50%;
  }
  
  /* Updated InputText styling */
  ${InputText} {
    margin-top: 15px; /* Adjust spacing between input fields */
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
const FormElementInfo= styled.p`
color: #000000;
font-size: 14px;
font-weight: 1000;
text-align: left;
margin: 0 0 24px;
margin-top: 12px;
letter-spacing: 1px;

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
const CTA = styled.div `
max-width:650px;
width: 100%;
display: flex;
flex-direction: row;
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
color:#000000;
font-size: 16px;
font-weight:1000;
margin: 0 0 24px;
margin-top: 30px;
letter-spacing: 0.5px;
line-height: 1.5;
`;
const Welcome = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #090382;
margin-top: 25px;
letter-spacing: 2px;
font-size: 14px;
padding: 10.5px 0;
border: 1px solid transparent;
border-radius: 100px;
text-align:center;
 user-select: none;

&:hover {
    background-color: #3d78c4;
}
`;
const RowElements= styled.div`
flex-direction: row;
display: flex;
margin-left: 50px;
`;
const StyledA= styled.a`
color: #000000;
letter-spacing: 1.2px;
font-size: 12px;
border: 1px solid transparent;
text-align:center;
margin-right: 23px;
margin-top:30px;
display:flex;

span {color:#090382;
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
export default SignIn;