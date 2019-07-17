import React, {useState} from 'react';

function Formulario(){

  const[busqueda, agregarBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  // Función para actualizar el state de los inputs
  const actualizarState = e => {
    agregarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
            <fieldset>
              <legend className="text-center">Buscador de letras de canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="artista" 
                      placeholder="Nombre del artista"
                      onChange={actualizarState}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="cancion" 
                      placeholder="Nombre de la canción"
                      onChange={actualizarState}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Formulario;