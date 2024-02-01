import data from "../../data/index.json";
import front from "../../assets/img/frontend.png";
//iconos
import { MdOutlineStyle } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
//imagenes
import JS from "../../assets/img/logs/JavaScript.png";
import css from "../../assets/img/logs/css.png";
import bootstrap from "../../assets/img/logs/bootstrap.svg";
import firebase from "../../assets/img/logs/firebase.png";
import html from "../../assets/img/logs/html.png";
import mongo from "../../assets/img/logs/mongo.png";
import mysql from "../../assets/img/logs/mysql.png";
import node from "../../assets/img/logs/node.png";
import python from "../../assets/img/logs/python.png";
import react from "../../assets/img/logs/react.png";
import wp from "../../assets/img/logs/wordpress.png";
import java from "../../assets/img/logs/java.png";
import { Progress } from "antd";

const skillsFron = [
    {
        id: "1",
        src: JS,
        title: "JavaScript",
        barra: 95
    },
    {
        id: "2",
        src: css,
        title: "CSS",
        barra: 85
    },
    {
        id: "3",
        src: html,
        title: "HTML",
        barra: 95
    },
    {
        id: "4",
        src: react,
        title: "React JS",
        barra: 95
    },
    {
        id: "5",
        src: wp,
        title: "WordPress",
        barra: 90
    },
    {
        id: "6",
        src: bootstrap,
        title: "Bootstrap",
        barra: 80
    }
]

const skillsBack = [
    {
        id: "1",
        src: node,
        title: "Node JS",
        barra: 95
    },
    {
        id: "2",
        src: python,
        title: "Python",
        barra: 85
    },
    {
        id: "3",
        src: mysql,
        title: "MySQL",
        barra: 95
    },
    {
        id: "4",
        src: mongo,
        title: "MongoDB",
        barra: 95
    },
    {
        id: "5",
        src: firebase,
        title: "Firebase",
        barra: 90
    },
    {
        id: "6",
        src: java,
        title: "Java",
        barra: 70
    }
]

export default function Skills() {

    return (
        <section id='Skills' className="skills--section">
            <div className="portfolio--container">
                <h2 className="skills--section--heading">Mis habilidades</h2>
                <p className="section--title">"La mente que se abre a una nueva idea jamás volverá a su tamaño original"  Albert Einstein</p>
            </div>
            <div className="skills--section--container">
                <div className="skills--section--card">
                    <div className="skills--section--title">
                        <MdOutlineStyle size={40} className="skills--section--icon" />
                        <h3>Desarrollo Front-end</h3>
                    </div>
                    <div className="skills--section--container--card">
                        {skillsFron.map((item, index) => (
                            <div key={index} >
                                <div className="skills--section--card--content">
                                    <div className="skills--section--img">
                                        <img src={item.src} alt={item.src} style={{ width: '100px' }} />
                                    </div>
                                    <p className="skills--section--description">{item.title}</p>
                                    <Progress
                                        percent={item.barra}
                                        status="active"
                                        strokeColor={{
                                            from: '#EC68E5',
                                            to: '#8E42E6',
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills--section--card">
                    <div className="skills--section--title">
                        <BsDatabaseFillCheck size={40} className="skills--section--icon" />
                        <h3>Desarrollo Back-end</h3>
                    </div>
                    <div className="skills--section--container--card">
                        {skillsBack.map((item, index) => (
                            <div key={index} >
                                <div className="skills--section--card--content">
                                    <div className="skills--section--img">
                                        <img src={item.src} alt={item.src} style={{ width: '100px' }} />
                                    </div>
                                    <p className="skills--section--description">{item.title}</p>
                                    <Progress
                                        percent={item.barra}
                                        status="active"
                                        strokeColor={{
                                            from: '#EC68E5',
                                            to: '#8E42E6',
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}