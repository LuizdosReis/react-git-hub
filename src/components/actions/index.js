import React from 'react';
import PropTypes from 'prop-types';
import style from './actions.css';

const Actions = ({ getRepos, getStarred }) => (
  <div className={style.actions}>
    <button type="button" onClick={getRepos}>
      Ver Repositórios
    </button>
    <button type="button" onClick={getStarred}>
      Ver Favoritos
    </button>
  </div>
);

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default Actions;
