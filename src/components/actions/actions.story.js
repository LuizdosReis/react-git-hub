import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Actions from './index';

storiesOf('Actions', module).add('first history', () => (
  <Actions getRepos={action('Get repositories')} getStarred={action('Get starred')} />
));
