import React from 'react'

export const Funciones = () => {
    const sumar = ( a:number, b:number ):number =>{
        return a + b;
    }

    return (
        <div>
            <h3>Funciones </h3>
            el resultado es: { sumar(1,4) }
        </div>
    )
}
