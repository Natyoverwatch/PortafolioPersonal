import React from "react";
/* import { Carousel } from 'antd'; */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import ips from "../../assets/img/certificado1.jpg"
import blog from "../../assets/img/certificado2.jpg"
import clasificador from "../../assets/img/certificado3.jpg"
import cartilla from "../../assets/img/certificado4.jpg"
import app from "../../assets/img/certificado5.jpg"
import card from "../../assets/img/certificado6.jpg"

const portfolio = [
    {
        "id": "1",
        src: ips,
        "title": "Proyecto IPS",
        "description": "Proyecto de una página web de una empresa de IPS en donde se manejan datos de forma masiva para los diferentes casos médico por medio de microservios de API para la validacion de usuarios, tipos de rolles y grupo a cargo ",
        "link": "View In Github"
    },
    {
        "id": "2",
        src: blog,
        "title": "Blog",
        "description": "Proyecto de prueba en donde a partir de un diseño especifico se plasma la idea en una página web y mostrar datos desde una API en una página web responsiva utilizando React.Js y consumiendo API de JSONPlaceholder",
        "link": "View In Github"
    },
    {
        "id": "3",
        src: clasificador,
        "title": "Clasificador Multiclase",
        "description": "Proyecto en donde se genera código de clasificación, el cual a partir de una serie de características obtenidas por los patrones de las imágenes del artículo de turbidez se busca generar una clasificación multiclase",
        "link": "View In Github"
    },
    {
        "id": "4",
        src: cartilla,
        "title": "Cartilla Python",
        "description": "Diseño de una cartilla para la enseñanza de Python en donde se parte de la necesidad de las personas que presentan dificultades en el entendimiento de este lenguaje de programación.",
        "link": "View In Github"
    },
    {
        "id": "5",
        src: app,
        "title": "Aplicación PyPro",
        "description": "Proyecto en donde se genera una aplicación para la enseñanza del lenguaje Python en donde se busca una interacción dinámica con el usuario permitiendo el aprendizaje a su propio ritmo",
        "link": "View In Github"
    },
    {
        "id": "6",
        src: card,
        "title": "User Card",
        "description": "Proyecto prueba en donde se realizan diferentes tipos de tarjetas con diferentes animaciones en donde se utilizan datas para la creación de las mismas",
        "link": "View In Github"
    }
]

export default function Education() {

    const duplicateImages = [...portfolio, ...portfolio]

    return (
        <div id='Education' className="lg: p-[80px] sm: p-8">
            <div className="portfolio--container">
                <h2 className="skills--section--heading"> Certificados</h2>
                <p className="section--title">"La mejor forma de predecir el futuro es crearlo" Dennis Gabor</p>
            </div>
            <div className='flex flex-col overflow-hidden p-5'>
                <ul className='w-[calc(300px * 10)] mt-16 mb-4 flex animate-slider snap-x gap-7 hover:animate-stop'>
                    {
                        duplicateImages.map((image, index) => (
                            <li key={index} className='mb-2 max-h-[230px] snap-center'>
                                <img
                                    src={image.src}
                                    width={800}
                                    height={200}
                                    className='min-w-[300px] max-w-[300px]'
                                    alt={image.src}
                                />
                            </li>
                        ))
                    }
                </ul >
            </div >
        </div>
    );
}