'strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
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
              username: data.login,
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

  getRepos (type) {
    const { username } = this.state.userInfo

    axios.get(`https://api.github.com/users/${username}/${type}`)
      .then((response) => {
        const { data } = response

        const repos = data.map(repo => ({
          key: repo.id,
          link: repo.html_url,
          name: repo.name
        }))

        this.setState({ [type]: repos })
      })
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
      getRepos={() => this.getRepos('repos')}
      getStarred={() => this.getRepos('starred')}
    />
  }
}

export default App
