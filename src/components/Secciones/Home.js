import { useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import headerImg from "../../assets/img/home.png";
import pdf from '../../assets/archivos/Hoja de vida.pdf';

export default function Home() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["esarrollador Web", "ocente", "esarrollo Frontend", "esarrollo Backend"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <>
            <NavBar />
            <section id='Home' className="home--section">
                <div className="home--section--content--box">
                    <div className="home--section--content">
                        <span className="home--section--content--tagline">Bienvenidos a mi Portafolio</span>
                        <h1 className="home--section--title">
                            Hola, soy Nathalia
                            <br />
                            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "esarrollador Web", "ocente", "esarrollo Frontend", "esarrollo Backend" ]'> D<span className="wrap">{text}</span></span>
                        </h1>
                        <p className="home--section-description">
                            {/* Soy una desarrolladora entusiasta con experiencia en React, enfocada en crear experiencias de usuario dinámicas y atractivas. */}
                            Apasionada en todo lo que hago, en constante aprendizaje, dispuesta siempre a enfrentar desafios, amante de todo lo que indique transformación digital y accesibilidad para lograr una verdadera inclusión.
                        </p>
                        <button className="btn btn-primary">
                            <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV_Nathalia_Pinzon_Saiz.pdf">
                                Descarga mi CV
                            </a></button>
                    </div>
                </div>
                <div className="home--section--img">
                    <img src={headerImg} alt="Home Section" className="animate-[bounce_3s_infinite]" />
                </div>
            </section>

        </>
    );
}