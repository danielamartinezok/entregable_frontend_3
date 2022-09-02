import React from 'react'

function Cabecera(props) {
  
  return (
    <header>
        <div>
          <h1>Carrito de compras</h1>
          <p>Cantidad de productos <span>{props.qitems}</span></p>
        </div>
    </header>
  )
}

export default Cabecera;

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)
