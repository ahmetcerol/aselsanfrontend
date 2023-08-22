import React from "react";
import styled from "styled-components";

const YetenekProgrami = () => {
    return (
        <Container>
            <Content>
                <Section>
                    <Title>a Yetenek Programı</Title>
                    <Description>
                        Genç yeteneklerin iş hayatına başlamadan önce mesleki yeterlilik ve yetkinlikler açısından kendilerini geliştirmeleri ve 
                        ASELSAN kültürünü tanıyarak çalışma hayatına adım atmalarını amaçlayan ve mentorlük çalışmalarıyla adayların 
                        kariyer gelişimlerini destekleyen bir yetenek programıdır. Bu proje sayesinde hayata geçen çoğu Aselsan projesini yakından tanıma, alanında üst düzey mühendisler ile beraber çalışabilme şansı yakalayacak olan Aday Mühendislerimiz, alanlarında gösterdikleri başarılar ile beraber Aselsan şirketinde çalışabilme şansı yakalayacaklardır. 
                    </Description>
                </Section>
                <Section>
                    <Title>Programa Kimler Katılabilir?</Title>
                    <Description>
                        Yurt içi üniversitelerin Mühendislik, Fen-Edebiyat ve İktisadi ve İdari Bilimler örgün lisans programlarında son sınıf öğrencisi olanlar, artı olarak da Aselsan web sitesinde bulunan gerekli işe alım kriterlerini sağlayan adaylar başvurabileceklerdir. Kriterlerimize ulaşabilmek için; 

                    </Description>
                    <a href="https://www.aselsan.com/tr/kariyer/ise-alim-surecimiz">
                    <DescriptionLink>
                        Aselsan İşe Alım Kriterleri
                    </DescriptionLink></a>
                    <Title>Başvuru Aşamaları</Title>
                    <Description>
                    Ana Sayfada bulunan a-Yetenek giriş butonuyla girip bilgilerini dolduran veya hesabı yok ise Hesap Oluştur butonu ile kayıt olup bilgilerini dolduran ve ASELSAN 
                    işe alım kriterlerimizi sağlayan adaylar sürecimize dahil olabileceklerdir. Başvurular 13 Eylül Çarşamba günü gün sonuna kadar devam edecektir. a Yetenek Programı seçme ve yerleştirme sürecimiz Ağustos – Ekim 2023 arasında devam edecek olup, süreç aşamaları genel hatlarıyla şu şekildedir:
                    <br/><br/>
                    1. Aşama: Genel Yetenek Testi <br/>
                    2. Aşama: Dijital Yetkinlik Uygulaması<br/>
                    3. Aşama: Teknik Komisyon Mülakatları<br/>
                    4. Aşama: a Yetenek Programına Başlangıç<br/>
                    5. Aşama: Yetenek Günü
                    <br/><br/> 
                    Programın devamında hem mentorünle hem de ekip arkadaşların ile tanışıp,
                     ASELSAN’a ilk adımını atmaya ve yeteneğini keşfetmeye hazır mısın?<br/><br/>
                    Herhangi bir sorun olursa ayetenek@aselsan.com.tr adresinden bize ulaşabilirsin.<br/><br/>a Yetenek Program detayları ve güncellemelerimiz 
                    için @aselsanyasam Instagram sayfamızdan bizi takip etmeyi unutma!
                    </Description>
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
const DescriptionLink = styled.p`
font-size: 16px;
color: #003087;
text-decoration: underline;
transition: color 0.3s ease-in-out;

&:hover {
    color: #0258f7;
};
`;
const FixedIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: auto;
    z-index: 10;
   
`;

export default YetenekProgrami;