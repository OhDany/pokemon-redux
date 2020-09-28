import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class CantidadPokemon extends Component {
  render() {
    return (
      <Fragment>
        <div>Unidades: {this.props.game_shop.pokemon}</div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
