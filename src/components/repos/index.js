import React from 'react';
import PropTypes from 'prop-types';
import './repos.css';

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map(repo => (
        <li key={repo.key}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: '',
  repos: [],
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Repos;
