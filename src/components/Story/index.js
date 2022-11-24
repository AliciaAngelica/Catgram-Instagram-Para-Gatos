import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import './style.css'

export function Story() {
    const [images, setImages] = useState();

    useEffect(() => {
        api
            .get("/v1/images/0XYvRd7oD")
            .then((response) => setImages(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (

        <div className="story" >

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src="https://github.com/AliciaAngelica/instagram-login/blob/main/Catgram/img/perfil.png?raw=true"  />
                </div>

                <span>Maya.oli...</span>
            </div>

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={images?.url}  />
                </div>

                <span>Julinho</span>



            </div>

            

        </div>

    )

}