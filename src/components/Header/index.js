import React from 'react'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import { IconContext } from 'react-icons'
import Input from '../../components/Input'
import './style.css'


export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <img className="logo" src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/catgram-logo-png.png?raw=true" />

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <Input placeholder="Pesquisar" />
                </div>

                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>
                       
                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>
                        

                    </IconContext.Provider>
                    <img className="img-user" src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/perfil.png?raw=true" />
                </div>

            </div>

        </header>
    )

}