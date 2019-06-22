import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars0.githubusercontent.com/u/1?v=4' />
    <h1>
      <a href='https://github.com/mojombo'>Tom Preston-Werner</a>
    </h1>

    <p>Email: tom@gmail.com</p>

    <p>Entrou em: 21/05/2019 </p>
    <p>Ultima interação em: 21/06/2019</p>

    <ul className='repos-info'>
      <li>Repositórios: 122</li>
      <li>Seguidores: 21505</li>
      <li>Seguindo: 11</li>
    </ul>

  </div>
)

export default UserInfo
