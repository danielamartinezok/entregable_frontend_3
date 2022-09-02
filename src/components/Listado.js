import React from 'react';
import DataProducts from './data.json';
import Item from './Item';

function Listado(props) {

  const renderItems = (array) =>{
    return (
      array.map(item => {
        return (
          <Item 
          nombre={item.producto.nombre} 
          descripcion = {item.producto.descripcion} 
          stock = {item.stock} 
          addItem={props.addItem}/>
        )
      })
    )
  }

  return (
    <div className='container'>
      {renderItems(DataProducts)}
    </div>
  )
}


export default Listado;

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
