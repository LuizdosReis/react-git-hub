import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, isDisabled }) => (
  <div className="search">
    <input
      disabled={isDisabled}
      type="search"
      placeholder="Digite o nome do usuario no GitHub"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Search;
