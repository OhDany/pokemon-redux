import React from 'react';
import './App.css';
import imagen from './img/pokemon3.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/CantidadPokemon';
import CompraPokemon from './components/CompraPokemon';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="app container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: '370px' }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={imagen} alt="pokemon" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
