import React from "react";
import styled from "styled-components";
import genelKey from "../keys/genelKeys";
import footerKey from "../keys/footerKeys";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
         <FooterParagraph>
            {footerKey.tskInfo}
         </FooterParagraph>
        <CTALogo src="/images/tsk-logo.png" alt="TSK" />
        <FooterText>
          <strong>{footerKey.aselsanHeader}</strong>
          <a href="https://www.tskgv.org.tr/en/#lightbox-gallery" target="_blank" rel="noreferrer">{footerKey.aselsanInfo}</a>
        </FooterText>
       
      </FooterLeft>
      <FooterIcons>
        <IconLink href="https://twitter.com/aselsan?t=xyRWdceEgETzsk85cfrXaA&s=08" target="_blank" rel="noreferrer">
          <Icon src="/images/twitter.svg" alt="Twitter" />
        </IconLink>
        <IconLink href="https://www.instagram.com/aselsan/?utm_medium=copy_link" target="_blank" rel="noreferrer">
          <Icon src="/images/ınstagram.svg" alt="Instagram" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/aselsan/mycompany/verification/" target="_blank" rel="noreferrer">
          <Icon src="/images/linkedin.svg" alt="LinkedIn" />
        </IconLink>
      </FooterIcons>
      <Copyright>{genelKey.copyright}</Copyright>
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
const Copyright = styled.p `
position: absolute;
margin-top:120px;
margin-left: 45%;
font-size: 13px;
padding: 5px;
color: darkgray;

`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export default Footer;
