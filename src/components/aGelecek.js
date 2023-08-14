import React from "react";
import styled from "styled-components";
import aGelecekKeys from "../keys/aGelecekKeys";

const AGelecek = (props) => {
    return (
        <Container>
            <Content>
                <Section>
                    <Title>{aGelecekKeys.pageTitle}</Title>
                    <Description>{aGelecekKeys.pageTitleDescription}</Description>
                </Section>
                <Section>
                    <Title>{aGelecekKeys.whoMustApplyTitle}</Title>
                    <Description><br/>
                    -Stajlarinin zorunlu staj kapsaminda olmasi, <br/> <br/>
                    -Lisans ögrencileri için, 3 veya 4. sinifta ögrenim görüyor olmalari <br/> <br/>
                    -Ön Lisans Ögrencileri için, 2. Sinifta ögrenim görüyor olmalari<br/> <br/>
                    -Genel not ortalamalarinin 4.00 üzerinden en az 2.00 olmasi<br/> <br/>
                    -Daha önce ASELSAN’da staj yapmamis olmalari kosullarini sagliyor olmalari gereklidir. Belirtilen bu kosullari saglamayan ögrencilerin basvurulari sistem tarafindan kabul edilmez.<br/>                    
                    </Description>
                   
                    <Title>{aGelecekKeys.howCanApllyTitle}</Title>
                    <Description>{aGelecekKeys.howCanApllyInfo}</Description>

                    <Title>{aGelecekKeys.applyResultTitle}</Title>
                    <Description>{aGelecekKeys.applyResultInfo}</Description>
                
                </Section>
                <FixedIcon src={aGelecekKeys.aGelecekImage}/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f9f9f9;
    border-radius: 0 0 24px 24px;
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    margin-top:70px;
`;

const Section = styled.div`
    margin-bottom: 40px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #003087;
`;


const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
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
export default AGelecek;