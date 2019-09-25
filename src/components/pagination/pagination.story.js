import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './index';

const stories = storiesOf('Pagination', module);

stories
  .add('without props', () => <Pagination />)
  .add('with onClick and pageLink', () => (
    <Pagination
      total={3}
      activePage={1}
      pageLink="http://mypage.com/%page%"
      onClick={(page) => {
        window.alert(page);
      }}
    />
  ))
  .add('with pageLink', () => (
    <Pagination total={10} activePage={5} pageLink="http://mypage.com/%page%" />
  ))
  .add('with onClick', () => (
    <Pagination
      total={30}
      activePage={30}
      onClick={(page) => {
        window.alert(page);
      }}
    />
  ));
