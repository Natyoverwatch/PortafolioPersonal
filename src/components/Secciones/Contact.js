import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function Contact() {

    const [data, setData] = useState({ nombre: '', apellido: '', email: '', celular: 0, mensaje: '' });

    const handleCreateMessage = (e) => {
        e.preventDefault();
        console.log(data);

        const productsCollection = collection(db, "DataContactame");
        addDoc(productsCollection, data).then(({ id }) => {
            alert("Se ha enviado tu mensaje con éxito");
        });
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    return (
        <div id='Contact' className="contact--section bg-[#151826]">
            <div>
                <p className="sub--title">¿Quieres trabajar conmigo?</p>
                <h2 className="text-[#ffffff]">Contáctame</h2>
                <p className="text-lg">
                    ¡No dudes en ponerte en contacto conmigo para discutir cómo puedo contribuir a tu equipo!
                </p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label" >
                        <span className="text-md">Nombre</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="nombre"
                            id="first-name"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Apellido</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="apellido"
                            id="last-name"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Celular</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="celular"
                            id="phone-number"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Mensaje</span>
                    <textarea
                        name="mensaje"
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Escribe un mensaje..."
                        onChange={handleInputChange}
                    />
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn" onClick={handleCreateMessage}>Enviar</button>
                </div>
            </form>
        </div>
    );
}