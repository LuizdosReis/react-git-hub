'strict';

import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: {
        repos: [],
        pagination: {
          total: 1,
          activePage: 1,
        },
      },
      starred: {
        repos: [],
        pagination: {
          total: 1,
          activePage: 1,
        },
      },
      isFetching: false,
      error: '',
      perPage: 3,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  static getUrlGit(username, type, perPage, page) {
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users/${username}${internalType}?per_page=${perPage}&page=${page}`;
  }

  getTotalPage(headers, type) {
    const { link } = headers;

    const totalpagesMatch = link.match(/&page=(\d+)>; rel="last/);

    const { [type]: repo } = this.state;

    return totalpagesMatch ? +totalpagesMatch[1] : repo.pagination.total;
  }

  getRepos(type, page = 1) {
    return async () => {
      const { userInfo, perPage } = this.state;

      const response = await axios.get(App.getUrlGit(userInfo.username, type, perPage, page));

      const { data, headers } = response;

      const total = this.getTotalPage(headers, type);

      const repos = data.map((repo) => ({
        key: repo.id,
        link: repo.html_url,
        name: repo.name,
      }));

      this.setState({ [type]: { repos, pagination: { activePage: page, total } } });
    };
  }

  async handleSearch(e) {
    const { target } = e;
    const { value } = target;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isFetching: true });

      try {
        const { data } = await axios.get(App.getUrlGit(value));

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
        });
      } catch (error) {
        this.setState({ error: 'error ao conectar na API' });
      } finally {
        this.setState({ isFetching: false });
      }
    }
  }

  render() {
    const {
      userInfo, repos, starred, isFetching, error,
    } = this.state;
    return (
      <AppContent
        error={error}
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        isFetching={isFetching}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handlePagination={(type, page) => this.getRepos(type, page)()}
      />
    );
  }
}

export default App;
