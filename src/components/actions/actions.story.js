import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Actions from './index';

storiesOf('actions', module).add('first history', () => (
  <Actions getRepos={() => {}} getStarred={() => {}} />
));
