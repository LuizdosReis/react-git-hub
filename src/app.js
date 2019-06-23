'strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        img: 'https://avatars0.githubusercontent.com/u/1?v=4',
        name: 'Tom Preston-Werner',
        url: 'https://api.github.com/users/mojombo',
        email: 'tom@gmail.com',
        createdAt: '2007-10-20T05:24:19Z',
        updatedAt: '2007-10-20T05:24:19Z',
        repos: 61,
        followers: 21505,
        following: 11
      },
      repos: [{
        link: '#',
        name: 'nome do repositório'
      }],
      starred: [{
        link: '#',
        name: 'nome do repositório'
      }]
    }
  }

  render () {
    const {
      userInfo,
      repos,
      starred
    } = this.state

    return <AppContent
      userInfo={userInfo}
      repos={repos}
      starred={starred}
    />
  }
}

export default App
