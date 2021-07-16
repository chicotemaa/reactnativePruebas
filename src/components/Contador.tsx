import { useState } from 'react'
import { useConunter } from './hooks/useConunter';

export const Contador = () => {
 
    const {valor, acumular} = useConunter();

    return (
        <>
            <h3>Contador: <small>{ valor }</small></h3>  
            <button
            className="btn btn-primary"
            onClick= { ()=> acumular(1) }
            >
            +1
            </button>
            &nbsp;
            <button
            className="btn btn-danger"
            onClick= { ()=> acumular(-1) }
            >
            -1
            </button>
        </>
    )
}
