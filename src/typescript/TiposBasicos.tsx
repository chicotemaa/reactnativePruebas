

export const TiposBasicos = () => {

  const nombre:string  = 'Fernando';
  
  const edad:number = 123;
  const etado = true;

  const poderes =['velocidad','bailar'];

    return (
        <>
          <h3>Tipos Basicos</h3>  
          { nombre }, { edad }
          <br />
          {poderes.join(', ')}
        </>
    )
}
