import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button';
import useAuth from '../../hooks/useAuth';
import './style.css'

export function Suggestion() {

    const { signout } = useAuth();
    const navigate = useNavigate();

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/AliciaAngelica/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={"https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/perfil.png?raw=true"} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Maya.oliveira</span>
                        <p>Maya Oliveira</p>
                    </div>

                    <div className="logout" >
                    <Button Text="Sair" className="switch" onClick={() => [signout(), navigate("/login")]}></Button>
                    </div>
                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
    
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>Seguido por aliciaangelica</p>
                        </div>
    
                        <a href='#' className='link-blue' >Seguir</a>
                    </div>
                ))}
               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; Idioma</p>

                <p>&copy; 2022 ALÍCIA ANGÉLICA</p>

            </footer>
        </div>
    )
}