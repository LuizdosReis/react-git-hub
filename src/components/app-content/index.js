import React from 'react';
import PropTypes from 'prop-types';

import Search from '../search';
import UserInfo from '../user-info';
import Actions from '../actions';
import Repos from '../repos';
import style from './app.css';

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
}) => (
  <div className={style.app}>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo {...userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos className="repos" title="Repositórios" repos={repos} />}

    {!!starred.length && <Repos className="starred" title="Favoritos" repos={starred} />}
  </div>
);

AppContent.defaultProps = {
  userInfo: null,
};

AppContent.propTypes = {
  userInfo: PropTypes.shape({
    img: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
  }),
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  starred: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default AppContent;
