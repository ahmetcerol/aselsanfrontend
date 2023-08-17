import styled from "styled-components";
import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from "../context/UserContext";


const DetailedUser = () => {

  const { tcKimlikNo } = useUser();
  const [loginStatus, setLoginStatus] = useState('');
  const [detailStatus, setDetailStatus]= useState('');
  const [selectedInterests, setSelectedInterests] = useState([]); 

// Gerekli değişkenlerin değişmesi durumunda value nesnesine bunları atayarak post methodu yapılacak sırada ki bodyleri oluşturan methodlar
const handleInputChangeUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
};
const handleInputChangeProje = (event) => {
      const { name, value } = event.target;
      setUserProje({ ...userProje, [name]: value });
};
const handleInputChangeStaj = (event) => {
    const { name, value } = event.target;
    setUserStaj({ ...userStaj, [name]: value });
};
const handleInputChangeEgitim = (event) => {
  const { name, value } = event.target;
  setUserEgitimBilgileri({ ...userEgitimBilgileri, [name]: value });
};
const handleInputChangeKariyer = (event) => {
  const { name, value } = event.target;
  setUserKariyer({ ...userKariyer, [name]: value });
};

// Seçili ilgi alanlarını tutan durum değişkeni
  
const handleCheckboxChange = (event) => {
      const value = event.target.value;
      if (selectedInterests.includes(value)) {
        // İlgili ilgi alanı zaten seçiliyse kaldır
        setSelectedInterests(selectedInterests.filter(item => item !== value));
      } else {
        // İlgili ilgi alanı seçili değilse ekle
        setSelectedInterests([...selectedInterests, value]);
      }
};  

// Gerekli değişkenleri tutar
const [user, setUser] = useState({
   gender:"",
   telephoneNumber:"",
   aktif:true,
});
const [userEgitimBilgileri, setUserEgitimBilgileri]= useState({
  okulAdi:"",
  startDate:"",
  finishDate:""
});
const[userStaj, setUserStaj] = useState({
  stajYeri: "",
  stajBölümü:"",
  stajSüresi:"",
  stajYili:"",
  stajTürü:"",
});
const[userProje, setUserProje] = useState({
  projeAdi:"",
  projeDeadlines:"",
  projeKurum:"",
  projeDetay:"",
});
const[userKariyer, setUserKariyer] = useState({
  kariyerHedefim:""
});

//Gerektiğinde gerekli değişkenleri bir üst yerden alarak post methodu yapan methodlar

const handleUser = () => {
 
  axios.post(`http://localhost:8080/user/detailed/${tcKimlikNo}`, user)
      .then(response => {
        setLoginStatus(response.data);
        if(response.data === "Detaylı kullanıcı bilgileri kaydedildi.");
        setDetailStatus("Deneyim Bilgileri");
        window.scroll(0, 0);
      }).catch(error => {
        console.error('Hatalı bir işlem yaptınız:',error);
        setDetailStatus("");
        setLoginStatus('Hatalı bir işlem yaptınız, lütfen tekrar deneyin.');
      });
      
};
const handleEgitim = () => {
  axios.post(`http://localhost:8080/${tcKimlikNo}/egitimBilgilerim`,userEgitimBilgileri)
  .then(response =>{
    setLoginStatus(response.data);
  }).catch(error =>{
    console.error('Hatalı bir işlem gerçekleştirdiniz', error);
    setLoginStatus('Hatalı bir işlem yaptınız, lüften tekra deneyiniz!')
  })
};
const handleStaj = () => {
  axios.post(`http://localhost:8080/${tcKimlikNo}/stajBilgileri`,userStaj)
  .then(response => {
    setLoginStatus(response.data);
  }).catch(error => {
    console.error('Giriş hatası:',error);
    setLoginStatus("Hatalı bir işlem gerçekleştirdiniz lütfen tekrar deneyiniz !");
  })
};
const handleProje = () => {
  axios.post(`http://localhost:8080/${tcKimlikNo}/projeDeneyimleri`,userProje)
  .then(response => {
    setLoginStatus(response.data);
  }).catch(error => {
    console.error('Giriş hatası:',error);
    setLoginStatus("Hatalı bir işlem gerçekleştirdiniz lütfen tekrar deneyiniz !");
  })
};
const handlekariyerHedeflerim = () => {
  axios.post(`http://localhost:8080/${tcKimlikNo}/kariyerHedeflerim`,userKariyer)
  .then(response => {
    setLoginStatus(response.data);
  }).catch(error => {
    console.error('Giriş hatası:',error);
    setLoginStatus("Hatalı bir işlem gerçekleştirdiniz lütfen tekrar deneyiniz !");
  })
};
const sendInterestsToDatabase = () => {
  axios.post(`http://localhost:8080/${tcKimlikNo}/adresler`, selectedInterests) // Axios ile POST isteği gönderiyoruz
    .then(response => {
      console.log("Veritabanına gönderildi:", response.data);
      // Gerekirse veritabanına gönderildiğini kullanıcıya bildirebilirsiniz
    })
    .catch(error => {
      console.error("Hata oluştu:", error);
    });
};
const handleUserAndSendInterests = () => {
  handleUser(); // İlk fonksiyonu çağır
  sendInterestsToDatabase(); // İkinci fonksiyonu çağır
};

//Kullanıcı geriye gitmek isterse çalışacak method
const handleUserBack = () => {
  setDetailStatus("") 
};



    return (
      <Container>
         <FixedIcon src="/images/a-yetenek.png"/>
            {detailStatus === "Deneyim Bilgileri"  ? (
              <Content>
                <İçerik>Bu bölümde birden fazla Proje, 
                  Staj ve Eğitim bilgisi ekleyebilirsiniz. 
                  Eklemek istediğiniz projeleri, staj bilgilerini ve eğitimleri
                  ekle tuşuna basarak kaydettikten sonra Kariyer hedefinizi de doldurarak Kaydet ve İlerle seçeneği ile başvurunuzu tamamlayabilirsiniz !</İçerik>
      
                  <Info>Staj Bilgileri </Info>
          
                    <CTA>
                
                <FormElements>
                      <StajInfo>Staj Yeri</StajInfo>
                      <StajInfo>Staj Bölümü</StajInfo> 
                      <StajInfo>Staj Süresi</StajInfo>
                      <StajInfo>Staj Yapılan Yıl</StajInfo>
                      <StajInfo>Staj Türü</StajInfo>
                </FormElements>
                
                <FormElements>
               
                  
                      <InputText
                  type="text"
                  name="stajYeri"
                  placeholder="Staj Yeri"
                  maxLength={11}
                  value={userStaj.stajYeri}
                  onChange={handleInputChangeStaj} 
              />
                <InputText
                  type="text"
                  name="stajBölümü"
                  placeholder="Staj Bölümü"
                  maxLength={11} 
                  value={userStaj.stajBölümü}
                  onChange={handleInputChangeStaj}
              />
                <InputText
                  type="number"
                  name="stajSüresi"
                  placeholder="Staj Süresi"
                  maxLength={11}
                  value={userStaj.stajSüresi}
                  onChange={handleInputChangeStaj}


              />
               <InputText type="date" 
              name="stajYili" 
              
              value={userStaj.stajYili}
              onChange={userStaj.handleInputChangeStaj}/>
               <Saelect
                  name="stajTürü"
                  value={userStaj.stajTürü}
                  onChange={handleInputChangeStaj}>
                              <option value={"Zorunlu"}>Zorunlu</option>
                              <option value={"Gönüllü"}>Gönüllü</option>
                      </Saelect>

                      <Ekle onClick={handleStaj}><span>Ekle !</span></Ekle>


              </FormElements>
                    </CTA>
        
                  <Info2>Proje Bilgileri </Info2>
          
                    <CTA>
                
                <FormElements>
                      <StajInfo>Proje Adı</StajInfo>
                      <StajInfo>Proje Kurumu</StajInfo> 
                      <StajInfo>Proje Süresi</StajInfo>
                      <StajInfo>Proje Detay</StajInfo>
                </FormElements>
                
                <FormElements>
               
                  
                      <InputText
                  type="text"
                  name="projeAdi"
                  placeholder="Proje Adı"
                  value={userProje.projeAdi}
                  onChange={handleInputChangeProje}
                  
              />
                <InputText
                  type="text"
                  name="projeKurum"
                  placeholder="Proje Kurumu"
                  value={userProje.projeKurum}
                  onChange={handleInputChangeProje}
                  
              />
                <InputText
                  type="text"
                  name="projeDeadlines"
                  placeholder="Proje Süresi"
                  value={userProje.projeDeadlines}
                  onChange={handleInputChangeProje}
                 
              />
              <TextArea
                  name="projeDetay"
                  placeholder="Proje Detay"
                  value={userProje.projeDetay}
                  onChange={handleInputChangeProje}
              />
              

              <Ekle onClick={handleProje}><span>Ekle !</span></Ekle>

               

              </FormElements>
                    </CTA>

                  <Info2>Eğitim Bilgileri </Info2>
          
                    <CTA>
                
                <FormElements>
                      <StajInfo>Okul Adı</StajInfo>
                      <StajInfo>Başlangıç Tarihi</StajInfo> 
                      <StajInfo>Bitiş Tarihi</StajInfo>
                </FormElements>
                
                <FormElements>
               
                  
                      <InputText
                  type="text"
                  name="okulAdi"
                  placeholder="Okul Adı"
                  value={userEgitimBilgileri.okulAdi}
                  onChange={handleInputChangeEgitim}
                  
              />
               <InputText type="date" 
              name="startDate" 
              value={userEgitimBilgileri.startDate}
              onChange={handleInputChangeEgitim}/>

               <InputText type="date" 
              name="finishDate" 
              value={userEgitimBilgileri.birthDate}
              onChange={handleInputChangeEgitim}/>
               
              

              <Ekle onClick={handleEgitim}><span>Ekle !</span></Ekle>

               

              </FormElements>
                    </CTA>
              
                  <Info2>Kariyer Hedeflerim </Info2>
                    
                    <CTA>
                <FormElements>
                <KariyerInfo>Kısaca Kariyer Hedeflerinden Bahseder Misin ?</KariyerInfo>
                </FormElements>
                <FormElements>
                <TextArea2 placeholder="Kariyer Hedeflerim"
                name="kariyerHedefim"
                value={userKariyer.kariyerHedefim}
                onChange={handleInputChangeKariyer}
                />

                <RowElements>
                       
                       <StyledA onClick={handleUserBack}><span>Geri Git </span></StyledA>
                       <StyledA onClick={handlekariyerHedeflerim}><span>Kaydet ve İlerle</span></StyledA>
               </RowElements>
                     <LoginStatus>{loginStatus}</LoginStatus> 
                </FormElements>
                    </CTA>
             
              </Content>
        ) : (
              <Content>
                <Info>Kişisel Bilgiler </Info>
                  <FixedIcon src="/images/a-yetenek.png"/>
                    <CTA>
                
                      <FormElements>
                        <FormElementInfo>Cinsiyetiniz</FormElementInfo>
                        <FormElementInfo>Telefon Numaranız</FormElementInfo> 
                        <FormElementInfo>İlgi Duyduğunuz Çalışma Alanları</FormElementInfo>
                      </FormElements>
                
                      <FormElements>
                        <Saelect
                          name="gender"
                          value={user.gender}
                          onChange={handleInputChangeUser}>
                              <option value={"Erkek"}>Erkek</option>
                              <option value={"Kadın"}>Kadın</option>
                        </Saelect>
                  
                        <InputText
                          type="text"
                          name="telephoneNumber"
                          placeholder="Telefon Numaranız"
                          maxLength={11} 
                          value={user.telephoneNumber}
                          onChange={handleInputChangeUser}/>
              
                  <ParagrafIçerik>Aşağıda yer alan çalışma alanlarından en fazla 10 adet olacak şekilde, birden fazla seçim yapabilirsiniz.</ParagrafIçerik>
             
              <CTA2>
                  <RowElements>

                    <CheckedBox type="checkbox" name="checkBox1" 
                      value={"Program/Proje Yönetimi"}
                      onChange={handleCheckboxChange}
                      checked={selectedInterests.includes("Program/Proje Yönetimi")}/>

                    <StyledB>Program/Proje Yönetimi</StyledB>

                  </RowElements>

                  <RowElements>

                    <CheckedBox type="checkbox" name="checkBox2" value={"Tüketim"}
                      onChange={handleCheckboxChange}
                      checked={selectedInterests.includes("Tüketim")}/>

                    <StyledB>Tüketim</StyledB>

                  </RowElements>

                  <RowElements>

                    <CheckedBox type="checkbox" name="checkBox3" value={"Lojistik"}
                      onChange={handleCheckboxChange}
                      checked={selectedInterests.includes("Lojistik")}/>

                    <StyledB>Lojistik</StyledB>

                  </RowElements>

                  <RowElements>

                    <CheckedBox type="checkbox" name="checkBox4" value={"Kalite"}
                      onChange={handleCheckboxChange}
                      checked={selectedInterests.includes("Kalite")}/>

                     <StyledB>Kalite</StyledB>

                  </RowElements>

                  <RowElements>

                      <CheckedBox type="checkbox" name="checkBox5" value={"İş Geliştirme"}
                       onChange={handleCheckboxChange}
                       checked={selectedInterests.includes("İş Geliştirme")}/>

                      <StyledB>İş Geliştirme</StyledB>

                  </RowElements>

                  <RowElements>

                      <CheckedBox type="checkbox" name="checkBox6" 
                        value={"Bilgi Teknolojileri"}
                        onChange={handleCheckboxChange}
                        checked={selectedInterests.includes("Bilgi Teknolojileri")}/>

                      <StyledB>Bilgi Teknolojileri</StyledB>

                  </RowElements>

                 <RowElements>

                      <CheckedBox type="checkbox" name="checkBox7"
                       value={"Elektronik Donanım Tasarım"}
                       onChange={handleCheckboxChange}
                       checked={selectedInterests.includes("Elektronik Donanım Tasarım")}/>

                       <StyledB>Elektronik Donanım Tasarım</StyledB>

                  </RowElements>

                  <RowElements>

                      <CheckedBox type="checkbox" name="checkBox8" 
                        value={"Mekanik Tasarım"}
                        onChange={handleCheckboxChange}
                        checked={selectedInterests.includes("Mekanik Tasarım")}/>

                       <StyledB>Mekanik Tasarım</StyledB>

                 </RowElements>

              <RowElements>
              <CheckedBox type="checkbox" name="checkBox9" 
              value={"Optik Tasarım"}
              onChange={handleCheckboxChange}
             checked={selectedInterests.includes("Optik Tasarım")}
              />
              <StyledB>Optik Tasarım</StyledB>
              </RowElements>
              <RowElements>
              <CheckedBox type="checkbox" name="checkBox9" 
              value={"Sistem Tasarım"}
              onChange={handleCheckboxChange}
               checked={selectedInterests.includes("Sistem Tasarım")}/>
               <StyledB>Sistem Tasarım</StyledB>
              </RowElements>
              <RowElements>
              <CheckedBox type="checkbox" name="checkBox10" 
              value={"Güdüm ve İnsansız Sistemler"}
              onChange={handleCheckboxChange}
              checked={selectedInterests.includes("Güdüm ve İnsansız Sistemler")}/>
              <StyledB>Güdüm ve İnsansız Sistemler</StyledB>
              </RowElements>
              <RowElements>
              <CheckedBox type="checkbox" name="checkBox11" 
              value={"Aviyonik Sistemler"}
              onChange={handleCheckboxChange}
          checked={selectedInterests.includes("Aviyonik Sistemler")}/>
              <StyledB>Aviyonik Sistemler</StyledB>
              </RowElements>
              <RowElements>
              <CheckedBox type="checkbox" name="checkBox12" 
              value={"Yazılım Tasarım"}
              onChange={handleCheckboxChange}
          checked={selectedInterests.includes("Yazılım Tasarım")}/>
              <StyledB>Yazılım Tasarım</StyledB>
              </RowElements>
              <RowElements>
              <CheckedBox type="checkbox" name="checkBox12" 
              value={"Gömülü Yazılım Tasarım"}
              onChange={handleCheckboxChange}
          checked={selectedInterests.includes("Gömülü Yazılım Tasarım")}/>
              <StyledB>Gömülü Yazılım Tasarım</StyledB>
              </RowElements>
              
              </CTA2>
        
                <RowElements>
                      <StyledA href="/"><span>Çıkış Yapmak İstiyorum !</span></StyledA>
                      <StyledA onClick={handleUserAndSendInterests}><span>Kaydet ve İlerle</span></StyledA>
                </RowElements>

                      <LoginStatus>{loginStatus}</LoginStatus> 
                </FormElements>
                    </CTA>
              </Content>
        )}
          <BgImage/>
      </Container>
    );
};


const Container = styled.section `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const Saelect = styled.select`
  height: auto;
  width: 100%; /* Adjust width */
  padding: 12px 16px; /* Add padding for better spacing */
  border-radius: 8px;
  border-color: #f9f9f9;
  margin-top: 12px;
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
const TextArea = styled.textarea`
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
resize: none; 
  &:focus {
    outline: none;
    border-color: #090382; /* Change border color on focus */
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5); /* Add a subtle box shadow on focus */
  }
`;
const TextArea2 = styled.textarea`
  margin-top: 35px;
  border-radius: 8px;
  width: 100%;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 50px 18px; /* Add padding for better spacing */
  font-size: 12px; /* Increase font size for better readability */
  background-color: #f9f9f9; /* Add a light background color */
  border: 1px solid #ccc; /* Add a light border */
  color: #333; /* Set text color */
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transitions */
resize: none; 
  &:focus {
    outline: none;
    border-color: #090382; /* Change border color on focus */
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5); /* Add a subtle box shadow on focus */
  }
`;
const CheckedBox = styled.input`
  margin-top: 35px;
  border-radius: 8px;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  
 /* Add padding for better spacing */
  font-size: 16px; /* Increase font size for better readability */
  background-color: #f9f9f9; /* Add a light background color */
  /* Add a light border */
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
  margin-left:10px;
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
const ParagrafIçerik= styled.p`
color: #003087;
text-align: left;
font-size: 13px;
margin-top:30px;
margin-left: 25px;
letter-spacing: 1px;
line-height: 30px;
text-indent:20px;
`;
const İçerik= styled.p`
color: #003087;
text-align: left;
font-size: 13px;
margin-top:30px;
margin-left: 25px;
letter-spacing: 1px;
line-height: 30px;
text-indent:20px;
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
const KariyerInfo= styled.p`
color: #000000;
font-size: 14px;
font-weight: 1000;
text-align: left;
margin: 0 0 24px;
margin-top: 42px;
letter-spacing: 1px;
`;
const StajInfo= styled.p`
color: #000000;
font-size: 14px;
font-weight: 1000;
text-align: left;
margin-top: 25px;
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
margin-left:450px;
width: 100%;
display: flex;
flex-direction: row;
`;
const CTA2 = styled.div `
max-width:650px;
width: 100%;
display: flex;
flex-direction: column;
`;
const BgImage = styled.div`
height: 100%;
background-position: bottom;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/aselsan-eniyilerle-eniyiyerde.jpg");
position: fixed;
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
const Info2 = styled.p`
color:#000000;
font-size: 16px;
font-weight:1000;
margin: 0 0 24px;
margin-top: 50px;
letter-spacing: 0.5px;
line-height: 1.5;
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
user-select: none;


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
const Ekle= styled.a`
color: #000000;
letter-spacing: 1.2px;
font-size: 14px;
border: 1px solid transparent;
text-align:center;
margin-left:300px;
margin-top:30px;
display:flex;
user-select: none;



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
const StyledB= styled.p`
color: #000000;
letter-spacing: 1.2px;
font-size: 12px;
border: 1px solid transparent;
text-align:center;
margin-left: 12px;
margin-top:40px;
display:flex;
`;

export default DetailedUser;