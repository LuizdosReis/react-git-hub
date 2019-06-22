import React from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {
        repos.map(repo => (
          <li key={repo.name}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))
      }
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
}

export default Repos
