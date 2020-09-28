import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemonHook = () => {
  const game_shop = useSelector((state) => state.game_shop);

  return (
    <Fragment>
      <div>Unidades: {game_shop.pokemon}</div>
    </Fragment>
  );
};

export default CantidadPokemonHook;
