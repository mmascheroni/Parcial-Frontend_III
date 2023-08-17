import React, { useState } from 'react'
import Card from './Card'

function Form() {

    const [persona, setPersona] = useState({
        nombre: '',
        juegoFavorito: ''
    })

    const [mensaje, setMensaje] = useState('')

    const handleSubmit = () => {
        if( (persona.nombre.length > 3 && !persona.nombre.startsWith(" ")) && persona.juegoFavorito.length >= 6 ) {
            setMensaje(`
            Hola, ${persona.nombre}!

            Tu juego favorito es: ${persona.juegoFavorito}
            `)
        } else {
            setMensaje('Por favor chequea que la información sea correcta')
        }
    }
    

    return (
        <div>
            <h2>Formulario: Tu Juego Favorito!</h2>

            <label>Nombre: </label>
            <input 
            type="text" placeholder='Ingresa tu nombre...' 
            onChange={(e) => setPersona({...persona, nombre: e.target.value})}
            />

            <label style={{marginLeft: '15px'}}>Juego Favorito: </label>
            <input 
            type="text" placeholder='Ingresa tu juego favorito...' 
            onChange={(e) => setPersona({...persona, juegoFavorito: e.target.value})}
            />

            <button style={{marginLeft: '15px'}} onClick={handleSubmit}>Enviar</button>

            <Card mensaje={mensaje}/>
        </div>
    )
}

export default Form