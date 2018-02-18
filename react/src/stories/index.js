import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import {Book} from '../components/book';
import {Shelf} from '../components/shelf';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

  storiesOf('Book', module)
  .add('with some emoji', () => <Book title="hhdfs"/>);

  storiesOf('Shelf', module)
  .add('with some emoji', () => <Shelf name="hhdfs" color="blue" />);

