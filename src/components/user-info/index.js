import React from 'react';
import PropTypes from 'prop-types';
import style from './user-info.css';

const UserInfo = ({
  img,
  username,
  url,
  email,
  createdAt,
  updatedAt,
  repos,
  followers,
  following,
}) => (
  <div className={style.userInfo}>
    <img src={img} alt="img of user" />
    <h1>
      <a href={url}>{username}</a>
    </h1>

    <p>
      Email:
      {email}
    </p>

    <p>
      Entrou em:
      {createdAt}
      {' '}
    </p>
    <p>
      Ultima interação em:
      {updatedAt}
    </p>

    <ul className={style.reposInfo}>
      <li>
        Repositórios:
        {repos}
      </li>
      <li>
        Seguidores:
        {followers}
      </li>
      <li>
        Seguindo:
        {following}
      </li>
    </ul>
  </div>
);

UserInfo.defaultProps = {
  email: '',
};

UserInfo.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default UserInfo;
