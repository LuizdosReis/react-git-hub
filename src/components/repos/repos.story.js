import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Repos from './index';

storiesOf('Repos', module)
  .add('with title props', () => <Repos title="Starred" />)
  .add('with repos', () => (
    <Repos
      title="Starred"
      repos={{
        repos: [{ key: 1, link: 'https://github.com', name: 'github' }],
        pagination: { total: 1, activePage: 1 },
      }}
    />
  ));
