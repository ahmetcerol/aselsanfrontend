import React, { useState } from "react";
import styled from "styled-components";

const Olanaklar = (props) => {
    const [activeCta, setActiveCta] = useState(null);

    return (
        <Container>
            <Content>
                <CtaWrapper>
                    <RowElements>
                        <Cta
                            isActive={activeCta === "egitim"}
                            onMouseEnter={() => setActiveCta("egitim")}
                            onMouseLeave={() => setActiveCta(null)}
                        >
                            <CTAIcon src="/images/eğitim.svg" />
                            <Başlıklar>Eğitim Olanakları</Başlıklar>
                            {activeCta === "egitim" && (
                                <Info>Tüm çalışanlarımız için görev tanımları doğrultusunda yapacakları yüksek lisans ve doktora eğitimi kapsamında kullanılabilecekleri ücretli izin olanakları, 
                                    yurtdışında doktora seçeneği ve gerekli durumlarda yabancı dil kursu gibi olanaklarımız bulunmaktadır.</Info>
                            )}
                        </Cta>
                        <Cta
                            isActive={activeCta === "toplum"}
                            onMouseEnter={() => setActiveCta("toplum")}
                            onMouseLeave={() => setActiveCta(null)}
                        >
                            <CTAIcon src="/images/people-group.svg" />
                            <Başlıklar>Sosyal Etkinlikler</Başlıklar>
                            {activeCta === "toplum" && (
                                <Info>Tüm çalışanlarımız için her yıl yenilenen ve bölümleri ile birlikte kullanabilecekleri, 
                                    masraflarının tamamı şirketimiz tarafından karşılanan sosyal etkinlik olanakları yer almaktadır.</Info>
                            )}
                        </Cta>
                        <Cta
                            isActive={activeCta === "ogrenme"}
                            onMouseEnter={() => setActiveCta("ogrenme")}
                            onMouseLeave={() => setActiveCta(null)}
                        >
                            <CTAIcon src="/images/life-ring.svg" />
                            <Başlıklar>Servis Hizmetlerimiz</Başlıklar>
                            {activeCta === "ogrenme" && (
                                <Info>Tüm yerleşkelerimizde sadece merkezi noktalara değil semtlere kadar uzanan, 200’den fazla servis aracıyla, geniş bir servis ağımız bulunmaktadır. Fazla mesai saatlerimize uygun servis olanağımızın yanında Yüksek Lisans ve Doktora'ya devam eden çalışanlarımız için ODTÜ, Bilkent, Hacettepe gibi üniversitelere, 
                                    derslerine rahatça gidip gelebilecekleri, servis olanaklarımız da bulunmaktadır.</Info>
                            )}
                        </Cta>
                        <Cta
                            isActive={activeCta === "saglik"}
                            onMouseEnter={() => setActiveCta("saglik")}
                            onMouseLeave={() => setActiveCta(null)}
                        >
                            <CTAIcon src="/images/medical.svg" />
                            <Başlıklar>Özel Sağlık Sigortası</Başlıklar>
                            {activeCta === "saglik" && (
                                <Info>Tüm çalışanlarımızı kapsayan, eş ve çocuklar için kapsamını genişletebileceğiniz, çalışanlarımıza verdiğimiz değer ve eşitlik ilkelerine uygun, 
                                    genel piyasa uygulamalarının üzerinde bir özel sağlık sigortamız bulunmaktadır.</Info>
                            )}
                        </Cta>
                    </RowElements>
                </CtaWrapper>
                <FixedIcon src="/images/aselsan-logo.png" />
            </Content>
            <BgImage />
        </Container>
    );
}

const Container = styled.section`
   overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`;
const CtaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;
const RowElements = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;
const CTAIcon = styled.img`
    max-width: 100px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
`;
const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
`;
const Cta = styled.div`
    max-width: 200px;
    width: 100%;
    margin-left:30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => (props.isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 48, 135, 0.7)")};
    border-radius: 24px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;
`;
const Başlıklar = styled.h3`
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: Cabin, sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin: 10px 0;
`;
const Info = styled.p`
    color: #000000;
    font-size: 14px;
    font-weight:700;
    text-align: center;
    line-height: 1.5;
    opacity: 1;
    margin-top: 10px;
`;
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/albators.jpeg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    border-radius: 0 0 20px 20px;
    z-index: -1;
`;

export default Olanaklar;