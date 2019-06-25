'strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
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

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${value}`)
        .then((response) => {
          const { data } = response
          this.setState({
            userInfo: {
              img: data.avatar_url,
              name: data.name,
              url: data.url,
              email: data.email,
              createdAt: data.created_at,
              updatedAt: data.updated_at,
              repos: data.public_repos,
              followers: data.followers,
              following: data.following
            }
          })
        })
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
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default App
