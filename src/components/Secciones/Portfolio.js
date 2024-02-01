import { CardProject } from '../Secciones/test2';
import { GlowCapture } from '@codaworks/react-glow'
//imagenes
import ips from "../../assets/img/portafolio1.png"
import blog from "../../assets/img/portafolio2.png"
import clasificador from "../../assets/img/portafolio3.png"
import cartilla from "../../assets/img/portafolio4.png"
import app from "../../assets/img/portafolio5.png"
import card from "../../assets/img/portafolio6.JPG"



export default function Portfolio() {

    const Projects = [
        {
            title: 'Proyecto IPS',
            img: ips,
            labels: ['React JS', 'API Rest', 'SCSS', 'Ant Dsg'],
            repoHub: 'https://github.com/Natyoverwatch/Prueba-IPS',
            repoLab: '',
            url: '',
            description: 'Proyecto de una página web de una empresa de IPS en donde se manejan datos de forma masiva para los diferentes casos médico por medio de microservios de API para la validacion de usuarios, tipos de rolles y grupo a cargo ',
            styles: 'glow:bg-green-400/20',
            color: 'green'
        },
        {
            title: 'Blog',
            img: blog,
            labels: ['React JS', 'API JSON', 'CSS', 'Ant Dsg'],
            repoHub: 'https://github.com/Natyoverwatch/PruebaTecnica',
            repoLab: '',
            url: '',
            description: 'Proyecto de prueba en donde a partir de un diseño especifico se plasma la idea en una página web y mostrar datos desde una API en una página web responsiva utilizando React.Js y consumiendo API de JSONPlaceholder',
            styles: 'glow:bg-blue-400/20',
            color: 'blue'
        },
        {
            title: 'Clasificador Multiclase',
            img: clasificador,
            labels: ['Python', 'Inteligencia Artificial', 'Manejor de datos'],
            repoHub: 'https://github.com/Natyoverwatch/Clasificador-Multiclase',
            repoLab: '',
            url: '',
            description: 'Proyecto en donde se genera código de clasificación, el cual a partir de una serie de características obtenidas por los patrones de las imágenes del artículo de turbidez se busca generar una clasificación multiclase',
            styles: 'glow:bg-violet-400/20',
            color: 'violet'
        },
        {
            title: 'Cartilla Python',
            img: cartilla,
            labels: ['Python', 'Educación', 'Canva'],
            repoHub: '',
            repoLab: '',
            url: 'https://www.canva.com/design/DAE_rwHP_z4/LYvKG9hxqWOdZtqI3imClw/view?utm_content=DAE_rwHP_z4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1',
            description: 'Diseño de una cartilla para la enseñanza de Python en donde se parte de la necesidad de las personas que presentan dificultades en el entendimiento de este lenguaje de programación.',
            styles: 'glow:bg-purple-400/20',
            color: 'purple'
        },
        {
            title: 'Aplicación PyPro',
            img: app,
            labels: ['React Native', 'CSS', 'Mongo DB', 'Adobe Illustrator'],
            repoHub: 'https://github.com/Natyoverwatch/AmbienteMaestria',
            repoLab: '',
            url: '',
            description: 'Proyecto en donde se genera una aplicación para la enseñanza del lenguaje Python en donde se busca una interacción dinámica con el usuario permitiendo el aprendizaje a su propio ritmo',
            styles: 'glow:bg-yellow-400/20',
            color: 'yellow'
        },
        {
            title: 'User Card',
            img: card,
            labels: ['React JS', 'FireBase', 'CSS'],
            repoHub: '',
            repoLab: 'https://gitlab.com/natap455/user-card',
            url: 'https://user-cards-practica-1.web.app/',
            description: 'Proyecto prueba en donde se realizan diferentes tipos de tarjetas con diferentes animaciones en donde se utilizan datas para la creación de las mismas',
            styles: 'glow:bg-orange-400/20',
            color: 'orange'
        }
    ]

    return (
        <div id='Portafolio' className="portfolio--section">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="skills--section--heading"> Portafolio</h2>
                    <p className="section--title">"Si lo puedes imaginar, lo puedes programar" Alejandro Taboada</p>
                </div>
                <div>
                    <button onClick={() => window.location.href = 'https://github.com/Natyoverwatch'} className="btn btn-github">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 33 33"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                                fill="currentColor"
                            />
                        </svg>
                        Visit My GitHub
                    </button>
                </div>
            </div>
            <GlowCapture className='mt-8 flex w-full flex-wrap justify-center  gap-9 lg:grid xl:grid-cols-3 lg:grid-cols-2'>
                {Projects.map(
                    ({ title, img, labels, url, repoHub, repoLab, description, color, styles }) => (
                        <CardProject
                            key={title}
                            title={title}
                            img={img}
                            labels={labels}
                            url={url}
                            repoHub={repoHub}
                            repoLab={repoLab}
                            description={description}
                            color={color}
                            styles={styles}
                        />
                    )
                )}
            </GlowCapture>
        </div>
    );
}


/* import { VscGithubInverted } from "react-icons/vsc";
import { SiGitlab } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
//imagenes
import ips from "../../assets/img/portafolio1.png"
import blog from "../../assets/img/portafolio2.png"
import clasificador from "../../assets/img/portafolio3.png"
import cartilla from "../../assets/img/portafolio4.png"
import app from "../../assets/img/portafolio5.png"
import card from "../../assets/img/portafolio6.JPG"

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
        
        "link": "View In Github"
    }
]

export default function Portfolio() {

    return (
        <div id='Portafolio' className="portfolio--section">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="skills--section--heading"> Portafolio</h2>
                    <p className="section--title">"Si lo puedes imaginar, lo puedes programar" Alejandro Taboada</p>
                </div>
                <div>
                    <button onClick={() => window.location.href = 'https://github.com/Natyoverwatch'} className="btn btn-github">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 33 33"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                                fill="currentColor"
                            />
                        </svg>
                        Visit My GitHub
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {portfolio.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <h3 className="portfolio--section--title">{item.title}</h3>
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <p className="text-md">{item.description}</p>
                            <div className="portfolio--section--card--icons">
                                <SiGitlab style={{ paddingLeft: '10px' }} />
                                <VscGithubInverted style={{ paddingLeft: '10px' }} />
                                <FiExternalLink style={{ paddingLeft: '10px' }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
} */