import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrderHistory from './index';
import README from './README.md';
import * as orderHistory from '../../jsons/orderHistory.json';

storiesOf('OrderHistory', module)
  .addDecorator(withKnobs)
  .add(
    'Loading state',
    withInfo({ text: README, source: false })(() => (
      <OrderHistory
        orderHistory={orderHistory.list}
        userOrderHistory={orderHistory.list}
        authenticated={true}
        loading={true}
      />
    ))
  )
  .add(
    'Not LoggedIn',
    withInfo({ text: README, source: false })(() => (
      <OrderHistory
        orderHistory={orderHistory.list}
        userOrderHistory={orderHistory.list}
        authenticated={false}
        loading={false}
      />
    ))
  )
  .add(
    'LoggedIn',
    withInfo({ text: README, source: false })(() => (
      <OrderHistory
        orderHistory={orderHistory.list}
        userOrderHistory={orderHistory.list}
        authenticated={true}
        loading={false}
      />
    ))
  );
