import React from 'react';
import PropTypes from 'prop-types';
import pagination from 'utils/pagination';

const Pagination = ({ total, activePage }) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <a href="/">{page}</a>
      </li>
    ))}
  </ul>
);

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default Pagination;
