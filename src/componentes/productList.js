import React, { useState, useEffect } from 'react';


//AQUI LE PASAMOS LA LISTA DE PRODUCTOS PARA LUEGO REALIZAR UN MAP Y PODER MOSTRARLA EN EL HTML
const ProductList = ({ productos }) => {

  //ESTADO PARA GESTIONAR EL VALOR DEL INPUT DE BUSQUEDA
  const [filtroNombre, setFiltroNombre] = useState('');

  //AQUI ALMACENAMOS LOS PRODUCTOS POR EL FILTRO
  const [productosFiltrados, setProductosFiltrados] = useState(productos);


  useEffect(() => {
    const productosFiltrados = productos.filter((producto) =>
      producto.name.toLowerCase().includes(filtroNombre.toLowerCase())
    );
    setProductosFiltrados(productosFiltrados);
  }, [filtroNombre, productos]);

  // HACEMOS QUE LOS PRODUCTOS DESAPAREZCAN CADA UN SEGUNDO
  useEffect(() => {
    const intervalo = setInterval(() => {
      setProductosFiltrados((prevProductos) => prevProductos.slice(0, -1));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [productosFiltrados]);

  const handleBuscar = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleBuscar}>
          <input
            type='text'
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            placeholder="Buscar por nombre"
          />
          <button type="submit">Buscar</button>
        </form>
        <ul className='productos_lista'>
          {productosFiltrados.map((producto) => (
            <li key={producto.id}>
              <h3>{producto.name}</h3>
              <p>EAN: {producto.EAN}</p>
              <p>SKU: {producto.sku}</p>
              <p>MARKET: {producto.market}</p>
              <p>PRECIO: {producto.NORMAL_PRICE}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
