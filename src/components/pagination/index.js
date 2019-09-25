import React from 'react';
import PropTypes from 'prop-types';
import pagination from 'utils/pagination';
import Page from './page';

const Pagination = ({
  total, activePage, pageLink, onClick,
}) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
);

Pagination.defaultProps = {
  pageLink: '',
  onClick: null,
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
};

export default Pagination;
