import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'components/pagination';

import './repos.css';

const Repos = ({
  className, title, repos, handlePagination,
}) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className="repos-list">
      {repos.repos.map((repo) => (
        <li key={repo.key}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination
      total={repos.pagination.total}
      activePage={repos.pagination.activePage}
      onClick={handlePagination}
    />
  </div>
);

Repos.defaultProps = {
  // eslint-disable-next-line react/jsx-props-no-spreading
  className: '',
  repos: {
    repos: [],
    pagination: {
      total: 0,
      activePage: 0,
    },
  },
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number,
    }),
  }),
  handlePagination: PropTypes.func.isRequired,
};

export default Repos;
