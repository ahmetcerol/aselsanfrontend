import { styled } from "styled-components";
import { Navigate } from 'react-router-dom'; 
import { useUser } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const KisiselVeriler =  ({ isLoggedIn, tcKimlik, setTcKimlik, setIsLoggedIn }) => {
   
const {tcKimlikNo} = useUser();
const navigate = useNavigate();


const handleTc = () => {
    setTcKimlik(tcKimlikNo);
    setIsLoggedIn(true);
    navigate('/DetailedUser');
};
  
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/person/${tcKimlikNo}`)
  };  

    if (!isLoggedIn) {
        return <Navigate to="/SignIn" />;
      }

    return (
        <Container>
            <Content>
                <Section>
                    <Description>
                    ASELSAN Elektronik Sanayi ve Ticaret A.Ş.
                     (“ASELSAN”) a Yetenek Programı’nda görev 
                     almak isteyen kişilerin tüm başvuruları ve
                      gerekli görülen sınav sonuçları, elektronik 
                      ortamda “İş Başvuru Havuzu” olarak adlandırılan 
                      veri tabanında 2 (iki) yıl boyunca saklanacaktır.
                       ASELSAN internet sayfasında bulunan ASELSAN Kişisel 
                       Verilerin Korunması ve İşlenmesi Politikası, ASELSAN 
                       Kişisel Verilerin Saklanması ve İmhası Politikası ve 
                       ASELSAN Kişisel Verilerin Korunmasına İlişkin Aydınlatma 
                       Metni uyarınca işbu başvuru formunda beyan edeceğiniz
                        kişisel verilerinizin saklanmasına, işe alım ve değerlendirme 
                        süreçlerinde amacına uygun olarak ASELSAN tarafından kullanılmasına 
                        ve işlenmesine rıza gösteriyorsanız başvuru ekranına devam edebilirsiniz.
                    </Description>
                    <Description>
                        Bu bilgilendirmenin şartlarını 
                        kabul etmeniz durumunda takip edecek 
                        “a Yetenek Başvuru Formunda” yer alan 
                        bilgileri başvurunuzun değerlendirilmesi 
                        doğrultusunda tamamlamanız beklenmektedir. 
                        ASELSAN “a Yetenek Başvuru Formunda” yer alan 
                        soruları değiştirme hakkını saklı tutar.                   
                    </Description>
             
                </Section>
                <Section>
                    
                    <İmportant>
                    Sevgili a Yetenek adayımız, başvurunuzun geçerli 
                    sayılabilmesi için yurt içi üniversitelerin örgün 
                    lisans programlarında 3. sınıfı bitirmiş, son sınıfa 
                    geçmiş olmanız ve ASELSAN işe alım kriterlerini sağlıyor 
                    olmanız gerekmektedir. ASELSAN işe alım kriterlerimize
                    <Link href="https://www.aselsan.com/tr/kariyer/ise-alim-surecimiz" color="#003087"> www.aselsan.com.tr </Link>
                    üzerinden ulaşabilirsiniz.
                    </İmportant>
                </Section>
                <Section>
                    <WelcomeContainer>
                    <Welcome onClick={handleDelete} href="/">Kişisel Verilerimi Sil !</Welcome>
                    <Welcome href="/">Reddediyorum (ASELSAN Ana Sayfaya Dönüş)</Welcome>
                    <Welcome onClick={handleTc}>Onaylıyor ve Kabul Ediyorum</Welcome>
                    </WelcomeContainer>
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
const Link = styled.a`
    font-size: 16px;
    color: #003087;
    text-decoration: underline;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #0258f7;
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
const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right:10px;
`;
const Welcome = styled.a`
color: #f9f9f9;
background-color: #090382;
width: 100%;
margin-left: 40px;
letter-spacing: 2px;
font-size: 12px;
padding: 12.5px 0;
border: 1px solid transparent;
border-radius: 100px;
text-align: center;

&:hover {
    background-color: #3d78c4;
}
`;
export default KisiselVeriler;