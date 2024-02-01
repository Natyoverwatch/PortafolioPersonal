import me from "../../assets/img/me2.png";

export default function AboutMe() {
    return (
        <section id='Aboutme' className="about--section">
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about--section--img--bg">
                <path fill="#FF0066" d="M38,-45.5C53.8,-32,74.4,-24.4,81,-10.8C87.5,2.8,80.1,22.4,67.4,33.9C54.8,45.5,37,49.1,20.3,54.6C3.6,60.2,-11.9,67.7,-21.5,62.7C-31.1,57.6,-34.7,39.9,-43.6,25C-52.4,10.1,-66.3,-2,-68.1,-15.5C-69.9,-28.9,-59.5,-43.7,-46.1,-57.7C-32.7,-71.7,-16.3,-84.9,-2.6,-81.7C11.1,-78.6,22.1,-59.1,38,-45.5Z" transform="translate(100 100)" />
            </svg> */}
            <img src={me} alt="About Me" className="rounded-full " />

            <div className="home--section--content--box about--section--box">
                <div className="home--section--content">
                    <p className="section--title">Un poco más sobre mí</p>
                    <h1 className="skills-section--heading text-[#C96AA9]">¿Quién soy?</h1>
                    <p className="home--section-description">
                        Me llamo Jhasley Nathalia Pinzón Saiz, soy profesional de la Licenciatura en Electrónica con experiencia en desarrollo web tanto en las áreas de forntend como backend, he desarrollado diferentes productos que brinden una experiencia de usuario única y satisfactoria.
                    </p>
                    <p className="home--section-description">
                        Soy una persona autodidacta, responsable y comprometida con mi trabajo. Constantemente estoy aprendiendo nuevas tecnologías y herramientas para mejorar mis habilidades. De igual forma tengo experiencia docente en colegios de Bogotá en el área de tecnología e informática en donde enseñé a programar en diferentes lenguajes como Python, JavaScript, Scratch, entre otros más.
                    </p>
                </div>
            </div>
        </section >
    );
}