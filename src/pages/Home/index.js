import React from "react";
import { Story } from '../../components/Story'
import { Post } from '../../components/Post'
import { Suggestion } from '../../components/Suggestion'
import { Header } from "../../components/Header";
import './style.css'


const Home = () => {

    return (
        <>
            <div className="Header" >
                <Header />
            </div>

            <div className="MainGrid" >

                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box" >
                        <Story />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post />
                    </div>
                </div>


                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>



            </div>

        </>
    )

};

export default Home;
