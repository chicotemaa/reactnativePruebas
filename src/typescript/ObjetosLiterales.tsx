interface Persona {
    nombreCompleto:string;
    Edad:number;
    direccion: Direccion
}

interface Direccion{
    pais:string;
    casaNo:number;

}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Fernando',
        Edad: 35,
        direccion:{
            pais: 'Canada',
            casaNo:3312
        }


    }



    return (
        <>
            <h3>Objetos Literales </h3>
            { JSON.stringify(persona) }
        </>
    )
}
