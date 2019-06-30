'strict';

import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false,
    };
  }

  static getUrlGit(username, type) {
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users/${username}${internalType}`;
  }

  getRepos(type) {
    const { userInfo } = this.state;

    axios.get(App.getUrlGit(userInfo.username, type)).then((response) => {
      const { data } = response;

      const repos = data.map(repo => ({
        key: repo.id,
        link: repo.html_url,
        name: repo.name,
      }));

      this.setState({ [type]: repos });
    });
  }

  handleSearch(e) {
    const { target } = e;
    const { value } = target;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isFetching: true });
      axios
        .get(App.getUrlGit(value))
        .then((response) => {
          const { data } = response;
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
              following: data.following,
            },
            repos: [],
            starred: [],
          });
        })
        .finally(() => {
          this.setState({ isFetching: false });
        });
    }
  }

  render() {
    const {
      userInfo, repos, starred, isFetching,
    } = this.state;

    return (
      <AppContent
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        handleSearch={e => this.handleSearch(e)}
        getRepos={() => this.getRepos('repos')}
        getStarred={() => this.getRepos('starred')}
        isFetching={isFetching}
      />
    );
  }
}

export default App;
