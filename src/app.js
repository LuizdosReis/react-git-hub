'strict'

import React from 'react'

const App = () => (
  <div className='app'>

    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuario no GitHub'
      />
    </div>

    <div className='user-info'>
      <img src='https://avatars0.githubusercontent.com/u/1?v=4' />
      <h1>
        <a href='https://github.com/mojombo'>Tom Preston-Werner</a>
      </h1>

      <p>Email: tom@gmail.com</p>

      <p>Entrou em: 21/05/2019 </p>
      <p>Ultima interação em: 21/06/2019</p>

    </div>

    <ul className='repos-info'>
      <li>Repositórios: 122</li>
      <li>Seguidores: 21505</li>
      <li>Seguindo: 11</li>
    </ul>

    <div className='action'>
      <button>Ver Repositórios</button>
      <button>Ver Favoritos</button>
    </div>

    <div className='repos'>
      <h2>Repositórios</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>

    <div className='starred'>
      <h2>Repositórios</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>
  </div>
)

export default App
