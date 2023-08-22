import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Header from "./components/Header";
import SignIn from './components/SignIn';
import SiziNelerBekliyor from './components/SiziNelerBekliyor';
import AselsanKültür from './components/AselsanKültür';
import Olanaklar from './components/Olanaklar';
import AGelecek from './components/aGelecek';
import YetenekProgrami from './components/YetenekProgrami';
import ATik from './components/aTik';
import ForgotPassword from './components/SifremiUnuttum';
import SignUp from './components/KayıtOl';
import KisiselVeriler from './components/kisiselVeriler';
import DetailedUser from './components/DetailedUser';
import { UserProvider } from './context/UserContext';
import Succesfull from './components/Succesfull';
import Footer from './components/Footer';
import BaşvuruDurumEkrani from './components/BasvuruDurumEkrani';
import AdminPage from './components/AdminPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tcKimlik ,setTcKimlik] = useState("");
  

  return (
  
  <UserProvider>
    <div className="App">
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
              <Route exact path ="/veri" element = {<KisiselVeriler isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tcKimlik= {tcKimlik} setTcKimlik={setTcKimlik}/>}/>
              <Route exact path= "/" element = {<Login/>}/>
              <Route exact path="/SignIn" element = {<SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />}/>
              <Route exact path="/AselsanKültür" element= {<AselsanKültür/>}/>
              <Route exact path="/SiziNelerBekliyor" element = {<SiziNelerBekliyor/>}/>
              <Route exact path="/Olanaklar" element={<Olanaklar/>}/>
              <Route exact path='/aGelecek' element ={<AGelecek/>}/>
              <Route exact path="/ATik" element ={<ATik/>}/>
              <Route exact path="/YetenekProgrami" element={<YetenekProgrami/>}/>
              <Route exact path= "/ForgotPassword" element = {<ForgotPassword/>}/>
              <Route exact path="/SignUp" element = {<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
              <Route exact path='/DetailedUser' element ={<DetailedUser  isLoggedIn={isLoggedIn} tcKimlik= {tcKimlik} />}/>
              <Route exact path='/Succesfull' element ={<Succesfull isLoggedIn={isLoggedIn}/>}/>
              <Route exact path ='/BaşvuruDurum' element = {<BaşvuruDurumEkrani isLoggedIn={isLoggedIn} tcKimlik= {tcKimlik}/>} />
              <Route exact path='/AdminPage' element = {<AdminPage isLoggedIn={isLoggedIn}/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  </UserProvider>

  );
}

export default App;