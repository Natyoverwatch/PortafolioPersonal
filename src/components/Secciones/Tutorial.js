import { Glow, GlowCapture } from '@codaworks/react-glow'
import tet from '../../assets/img/color-sharp.png'
import { GitHubIcon, WebIcon } from '../../assets/icons'
import { Link } from 'react-router-dom';
import { Card, Image, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//imagenes
import compuertas from '../../assets/img/tutorial1.png'
import aereopendulo from '../../assets/img/tutorial2.png'
import ar from '../../assets/img/tutorial3.png'

const videos = [
    {
        "id": "1",
        src: compuertas,
        url: "https://www.youtube.com/embed/Z_8wWHtY8H4",
        title: "Proyecto AR -  LOGIC GATES ROOM con Unity"
    },
    {
        "id": "2",
        src: aereopendulo,
        url: "https://www.youtube.com/embed/Jw3S0chamMM",
        title: "Tutorial Aeropéndulo -  Sistemas de Control II"
    },
    {
        "id": "3",
        src: ar,
        url: "https://www.youtube.com/embed/m3rPbI_fNAE",
        title: "Tutorial AR Foundation Apps creadas"
    },
]

export default function Tutorial() {
    return (
        <div id='Tutorials' className="tutorial--section bg-[linear-gradient(90.21deg,_#AA367C_-5.91%,_#4A2FBD_111.58%)]">
            <div className="portfolio--container">
                <h2 className="skills--section--heading self-center"> Tutoriales</h2>
                <p className="section--title self-center">"En la vida eres maestro y aprendiz, unas veces enseñas y todos los días aprendes"</p>
                <div className="portfolio--section--container">
                    {videos.map((item, index) => (
                        <div key={index} className="tutorial--section--card">
                            <div class></div>
                            <h3 className="tutorial--section--title text-[#fff]">{item.title}</h3>
                            <div className="portfolio--section--img">
                                <Image
                                    width='100%'
                                    preview={{
                                        imageRender: () => (
                                            <div>
                                                <iframe className='video-contenedor' controls src={item.url} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        ),
                                        toolbarRender: () => null,
                                    }}
                                    src={item.src}
                                />
                                <p className="text-md "> {item.description} </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}