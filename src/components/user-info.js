import React, { PropTypes } from 'react'

const UserInfo = ({ img, name, url, email, createdAt, updatedAt, repos, followers, following }) => (
  <div className='user-info'>
    <img src={img} />
    <h1>
      <a href={url}>{name}</a>
    </h1>

    <p>Email: {email}</p>

    <p>Entrou em: {createdAt} </p>
    <p>Ultima interação em: {updatedAt}</p>

    <ul className='repos-info'>
      <li>Repositórios: {repos}</li>
      <li>Seguidores: {followers}</li>
      <li>Seguindo: {following}</li>
    </ul>
  </div>
)

UserInfo.PropTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired
}

export default UserInfo
