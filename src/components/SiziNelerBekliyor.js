import { styled} from "styled-components";

const SiziNelerBekliyor = (props) => {

    return (
        
        <Container>
            <Content>
                <CTA>
                    <Students>ÖĞRENCİLER</Students>
                    <StudentsInfo>ASELSAN'da kritik bir misyonun kahramanlarından biri olduğunu 
                        hissederek ekip ruhu, cesaret ve azimle mükemmeli hedefliyor ve 
                        kalbimizi ortaya koyarak uluslararası arenada Türkiye'yi temsil
                        etmenin gururunu yaşıyoruz.</StudentsInfo>
                </CTA>
                <Row>
                    <RowImage src="/images/aselsan-background-2.jpg"></RowImage>
                    <CTA>
                        <StudentsExpection>Sizi Neler Bekliyor ?</StudentsExpection>
                        <ExpectionInfo>ASELSAN ailesine, başarılı ve dinamik
                            yetenekleri kazandırmak, çalışan odaklı yaklaşımlarla
                            ASELSAN'ın sürdürülebilir başarısına katkıda bulunmak
                            ve her zaman çalışanının yanında olan uluslararası
                            standartlarda örnek gösterilecek bir yönetim
                            anlayışı izlemek İnsan Kaynakları politikamızın
                            temelini oluşturmaktadır. Bizler Çalışanlarımızın geleceğine 
                            yatırım yaparız.
                        </ExpectionInfo>
                        <FixedIcon src="/images/aselsan-logo.png "/>
                    </CTA>
                    
                </Row>

            </Content>
        </Container>

    );

}



const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;
const Container= styled.section `
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
background-color: #f9f9f9;
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
padding-top: 80px;
height: 100%;
`;
const CTA = styled.div`

max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;
const Row = styled.div `
width: 100%;
display: flex;
flex-direction: row;
background-color: #00318c;
height: 100%;
border-radius: 24px 24px 0 0;
`;
const RowImage= styled.img `
 margin-bottom: 25px;
 margin-top: 25px;
 margin-left: 50px;
 width: 50%;
 border-radius: 50px;
`;
const Students = styled.h3 `
color: #003087;
text-align: center;
font-size: 16px;
font-family: Cabin, sans-serif;

font-weight: 700;
letter-spacing: 1.5px;

`;
const StudentsExpection = styled.h3 `
color: #f9f9f9;
text-align: center;
margin-left: 24px;
margin-top:50px;
font-size: clamp(24px, 2.5vh, 30px);
font-weight: 700;
letter-spacing: 1.5px;
`;
const StudentsInfo = styled.p`
color: #003087;
font-size: 13px;
font-family: Cabin, sans-serif;
margin: 0 0 24px;
letter-spacing: 0.5px;
line-height: 1.5;
`;
const ExpectionInfo = styled.p`
color: #f9f9f9;
font-size: clamp(15px, 2vh, 18px);
font-weight: 700;

margin-left: 30px;
margin-right: 30px;
letter-spacing: 0.5px;
line-height: 1.5;
text-align:left;
`;

export default SiziNelerBekliyor;