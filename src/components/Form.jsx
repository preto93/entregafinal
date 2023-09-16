import React, { useState } from 'react';

function Form() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los campos
        if (nombre.length < 6 || !isValidEmail(email)) {
            setMensajeError('Por favor, verifique su información nuevamente.');
            setMensajeExito('');
        } else {
            // Simular el envío del formulario
            // Puedes realizar el envío real del formulario aquí

            // Mostrar mensaje de éxito
            setMensajeExito(`Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`);
            setMensajeError('');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <h1>Contacta a la Empresa</h1>
            <form id="form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    minLength="6"
                /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />

                <button type="submit">Enviar</button>
            </form>

            <div style={{ display: mensajeExito ? 'block' : 'none' }}>{mensajeExito}</div>
            <div style={{ display: mensajeError ? 'block' : 'none' }}>{mensajeError}</div>
        </div>
    );
}

export default Form;