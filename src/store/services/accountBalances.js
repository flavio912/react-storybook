// @flow
import { utils, Contract } from 'ethers';
import { ERC20Token } from 'proof-contracts-interfaces';
import { getProvider } from './provider';

import type { Token, Tokens, TokenBalances } from '../../types/common';

export async function queryEtherBalance(address: string) {
  const { provider } = await getProvider();

  const balance = await provider.getBalance(address);
  return {
    symbol: 'ETH',
    balance: utils.formatEther(balance),
  };
}

export async function queryTokenBalances(address: string, tokens: Array<Token>) {
  let balances;
  const { provider } = await getProvider();

  const balancePromises = tokens.map(token => {
    const contract = new Contract(token.address, ERC20Token.abi, provider);
    return contract.balanceOf(address);
  });

  balances = await Promise.all(balancePromises);
  balances = (balances: TokenBalances).map((balance, i) => ({
    symbol: tokens[i].symbol,
    balance: utils.formatEther(balance),
  }));

  return balances;
}

export async function subscribeEtherBalance(address: string, callback: number => void) {
  const { provider } = await getProvider();
  const initialBalance = await provider.getBalance(address);

  const handler = async balance => {
    if (balance !== initialBalance) callback(utils.formatEther(balance));
  };

  provider.on(address, handler);

  return () => {
    provider.removeListener(address, handler);
  };
}

export async function subscribeTokenBalance(address: string, token: Object, callback: number => void) {
  const { provider } = await getProvider();
  const contract = new Contract(token.address, ERC20Token.abi, provider);

  const initialBalance = await contract.balanceOf(address);

  const handler = async (sender, receiver, tokens) => {
    if (receiver === address) {
      const balance = await contract.balanceOf(receiver);
      if (balance !== initialBalance) callback(utils.formatEther(balance));
    }
  };

  contract.ontransfer = handler;

  return () => {
    provider.removeListener(address, handler);
  };
}
