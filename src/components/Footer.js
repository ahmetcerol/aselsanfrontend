import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
         <FooterParagraph>
        Türk Silahlı Kuvvetleri'nin haberleşme ihtiyaçlarının milli imkanlarla karşılanması için 1975 yılında kurulan 
        ASELSAN; Türk Silahlı Kuvvetlerini Güçlendirme Vakfı'na (TSKGV) bağlı bir anonim şirkettir. 
        ASELSAN hisselerinin %74,20'si TSKGV'ye aittir, %25,80'lik kısım ise Borsa İstanbul'da (BİST) işlem görmektedir.
        </FooterParagraph>
        <CTALogo src="/images/tsk-logo.png" alt="TSK" />
        <FooterText>
          <strong>ASELSAN A.Ş.</strong>
          <a
            href="https://www.tskgv.org.tr/en/#lightbox-gallery"
           
            rel="noopener"
          >
            Türk Silahlı Kuvvetlerini Güçlendirme Vakfı’nın bir kuruluşudur.
          </a>
        </FooterText>
      </FooterLeft>
      <FooterIcons>
        <IconLink href="https://twitter.com/aselsan?t=xyRWdceEgETzsk85cfrXaA&s=08">
          <Icon src="/images/twitter.svg" alt="Twitter" />
        </IconLink>
        <IconLink href="https://www.instagram.com/aselsan/?utm_medium=copy_link">
          <Icon src="/images/ınstagram.svg" alt="Instagram" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/aselsan/mycompany/verification/">
          <Icon src="/images/linkedin.svg" alt="LinkedIn" />
        </IconLink>
      </FooterIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #003087;
  padding: 20px 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align icons to top right */
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CTALogo = styled.img`
  max-width: 60px;
  margin-right: 20px;
`;
const FooterParagraph = styled.p`
  color: white;
  font-size: 16px;
  width: 50%;
  margin-left: 60px;
  margin-right: 15px;
`;
const FooterText = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: bold;
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }
`;
const IconLink = styled.a`
  display: block;
`;
const FooterIcons = styled.div`
  display: flex;
  align-items: flex-start; /* Align icons to top right */

  ${IconLink}:not(:last-child) {
    margin-right: 20px;
  }
`;



const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export default Footer;
