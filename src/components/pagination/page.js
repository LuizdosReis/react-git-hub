import React from 'react';
import PropTypes from 'prop-types';

const Dots = () => <span>...</span>;

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a';
  const handleClick = !onClick
    ? null
    : (e) => {
      e.preventDefault();
      onClick(page);
    };

  return (
    <Component href={pageLink} onClick={handleClick}>
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

export default Page;
