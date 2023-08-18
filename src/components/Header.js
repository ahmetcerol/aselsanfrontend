import { styled } from "styled-components";
import React, { useState } from "react";
import { useEffect,useRef } from "react";
import HeaderKeys from "../keys/HeaderKeys";
import genelKey from "../keys/genelKeys";
import axios from 'axios';
import { useUser } from "../context/UserContext";


const Header = ({isLoggedIn}) => {

const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
};
  
 /* Bu ref ile dropdown menüyü kapattığınızda başka
bir tıklamayı dinlememesini sağlayabiliriz.*/

 const dropdownRef = useRef(null);
 const { tcKimlikNo } = useUser();
useEffect(() => {
        fetchUserInfo();
        const handleOutsideClick = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        };
    
        // window objesine click olayını ekle
        window.addEventListener("click", handleOutsideClick);

        // Component çöktüğünde event listener'ı temizle
        return () => {
          window.removeEventListener("click", handleOutsideClick);
        };
        
},[tcKimlikNo]);

const [userInfo, setUserInfo] = useState({
        ad: '',
        soyad: '',
        eposta: ''
});
const fetchUserInfo = () => {
    if (tcKimlikNo) {
      axios.get(`http://localhost:8080/tcKimlikNo/${tcKimlikNo}`)
        .then(response => {
          const { ad, soyad, eposta } = response.data;
          setUserInfo({
            ad,
            soyad,
            eposta
          });
        })
        .catch(error => {
          console.error('Hata:', error);
        });
    }
  };

    return (
        <Nav>
               <Logo>
                
                <img src = "/images/a-yetenek.png" alt="ASELSAN" />
            
            </Logo>
            {isLoggedIn && ( // Eğer kullanıcı giriş yapmışsa
                <NavMenu>
                 <Cta>
                  <Profile>{userInfo.ad} {userInfo.soyad}</Profile>
                  <Email>{userInfo.eposta}</Email>
                 </Cta>
                </NavMenu>)}
            {!isLoggedIn && ( // Eğer kullanıcı giriş yapmamışsa 
                <Nav>
                    <Logo>
                <a href="/">
                <img src = "/images/a-yetenek.png" alt="ASELSAN" />
                </a>
            </Logo>
                <NavMenu>
                   
            <a href="/YetenekProgrami">
                    <span >{HeaderKeys.kimlerBaşvurmalı}</span>
                </a>
                <a href="/SiziNelerBekliyor">
                    <span >{HeaderKeys.siziNeBekliyor}</span>
                </a>
                <a href="/AselsanKültür">
                    <span>{HeaderKeys.kültürManifestosu}</span>
                </a>
                <a href="/Olanaklar">
                    <span>{HeaderKeys.sunulanOlanaklar}</span>
                </a>
                <DropdownToggle onClick={toggleDropdown} ref={dropdownRef}>
                    <span>{HeaderKeys.diğerProgramlar}</span>
                    {isDropdownOpen && (
                        <DropdownContent>
                            <DropdownItem href="/AGelecek">
                                <Icon src="/images/a-gelecek.png"/>{genelKey.aGelecek}</DropdownItem>
                            <DropdownItem href="/ATik">
                            <Icon src="/images/atik.png"/>{genelKey.aTik}</DropdownItem>
                        </DropdownContent>
                    )}

                
                </DropdownToggle>
                </NavMenu>
                </Nav>)}
        </Nav>);
        
}


const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #f9f9f9;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 8px;
z-index: 3;
`;
const NavMenu = styled.div`
align-items: center;
display:flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: 25px;
margin-left: auto;

a  {
    display:flex;
    align-items: center;
    padding: 0 12px;

    span {
        color:#090382;
        font-size: 12px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        font-weight: 700;

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

        }
    } &:hover {
        span: before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}
@media (max-width: 768px) {
    display: none;
}
`;
const Cta = styled.div`
display: flex;
flex-direction: column;
`;
const Logo= styled.a`
 padding: 0;
 width: 80px;
 margin-top: 4px;
 max-height: 70px;
 font-size: 0;
 display:inline-block;

 img{
    display:block;
    width: 100%;
 }
`;
const DropdownToggle = styled.a`
    
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
`;
const DropdownContent = styled.div`
   
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-width: 200px;
    z-index: 10;
    margin-top: 10px;
`;
const DropdownItem = styled.a`
    
    padding: 10px 15px;
    color: #090382;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #003087;
    }
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;
const Profile = styled.p`
        color:#090382;
        font-size: 12px;
        letter-spacing: 1.42px;
        padding: 2px 0px;
        position: relative;
        font-weight: 700;
        margin-bottom: 0;

`;
const Email = styled.p`
        color:#090382;
        font-size: 8px;
        letter-spacing: 1.42px;
        position: relative;
        font-weight: 700;
        margin-top: 0px;
        padding: 2px 0px;

`;

export default Header;