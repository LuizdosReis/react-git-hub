import React from 'react';
import PropTypes from 'prop-types';

const Dots = ({ className }) => <span className={className}>...</span>;

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a';
  const handleClick = !onClick
    ? null
    : (e) => {
      e.preventDefault();
      onClick(page);
    };

  return (
    <Component href={pageLink} onClick={handleClick} className="pagination-link">
      {page}
    </Component>
  );
};

Page.defaultProps = {
  onClick: null,
};

Page.propTypes = {
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  pageLink: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Dots.defaultProps = {
  className: 'pagination-link',
};

Dots.propTypes = {
  className: PropTypes.string,
};

export default Page;
