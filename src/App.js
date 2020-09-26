import React, { Fragment, useState, useEffect} from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ch&category=${categoria}&apiKey=18dfd97b299744f59013369b93dfc9f0`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario 
          guardarCategoria = {guardarCategoria}
        />

        <ListadoNoticias 
          noticias= {noticias}
        />
      </div>


    </Fragment>
  );
}

export default App;
