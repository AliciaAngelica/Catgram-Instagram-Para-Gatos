import React, { useEffect, useState } from "react";
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import api from "./../../services/api";
import { useNavigate } from "react-router-dom";
import './style.css'
import Input from "../Input";

export function Post() {
    const [images, setImages] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/v1/images/0XYvRd7oD")
            .then((response) => setImages(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return (
        <>

        <div className="post">
            <header className="header-post" >

                <div className="infos-post" >

                    <img className="img-header-post" src={images?.url} />

                    <p>Julinho</p>

                </div>


                <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={images?.url} />
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{ size: "30px" }} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>


                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>61 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                       <span>Julinho</span> Miau amigos, uma ótima tarde a todos.
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>

                        </IconContext.Provider>

                        <Input placeholder="Adicione um comentário..." />
                    </div>

                </div>
            </div>

        </div>
        </>

    )
}