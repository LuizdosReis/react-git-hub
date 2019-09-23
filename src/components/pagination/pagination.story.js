import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './index';

const stories = storiesOf('Pagination', module);

stories
  .add('without props', () => <Pagination />)
  .add('with props', () => <Pagination total={10} activePage={5} />);
