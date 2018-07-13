// @flow
import type { AccountState } from '../../types/account';

const initialState = {
  address: null,
};

export const initialized = () => {
  const event = (state: AccountState = initialState) => state;
  return event;
};

export const accountUpdated = (address: string) => {
  console.log('Address updated', address);
  const event = (state: AccountState) => ({
    ...state,
    address,
  });
  return event;
};

export default function model(state: AccountState) {
  return {
    address: () => state.address,
  };
}
