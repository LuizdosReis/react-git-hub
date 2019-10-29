import React from 'react';
import PropTypes from 'prop-types';

import Search from 'components/search';
import UserInfo from 'components/user-info';
import Actions from 'components/actions';
import Repos from 'components/repos';
import './app.css';

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
  handlePagination,
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo {...userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    <div className="repos-container">
      {!!repos.repos.length && (
        <Repos
          className="repos"
          title="Repositórios"
          repos={repos}
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />
      )}

      {!!starred.repos.length && (
        <Repos
          className="starred"
          title="Favoritos"
          repos={starred}
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />
      )}
    </div>
  </div>
);

AppContent.defaultProps = {
  userInfo: null,
};

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object,
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
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

export default AppContent;
