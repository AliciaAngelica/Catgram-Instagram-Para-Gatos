import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './style.css'

const Login = () => {

  return (

    <div className="catgram">
      <div className="catgram-wrapper">
        <div className="catgram-phones">

          <img src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/inicial2.png?raw=true" />

        </div>
        <div className="catgram-perfil">
          <div className="group">

            <div className="catgram-logo">
              <img src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/catgram-logo-png.png?raw=true" />
            </div>

            <div className="profile-photo">
              <img src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/perfil.png?raw=true" />
            </div>

          
            <Link to="/signin" className="login">Continue como Maya.oliveira</Link>
            <a href="#" className="logout">Remover conta</a>
          </div>

          <div className="group">
            <p className="not-account">Não é Maya.oliveira?</p>
            <p className="notaccount">
              <a href="#" className="link-blue">Alternar conta </a>
              ou
              <Link to="/signup" className="link-blue"> Inscreva-se</Link>
            </p>
          </div>

          <div className="gettheapp">
            <p className="get-app">Baixe o aplicativo</p>
            <div className="download">
              <a href="#" className="app-download"></a>
              <a href="#" className="app-download"></a>
            </div>
          </div>

          <div className="rodape">
            <p>&copy; Desenvolvido por: Alícia Angélica</p>
          </div>

        </div>



      </div>
    </div>

  );
};

export default Login;
