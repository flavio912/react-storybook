import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';

import configureStore from '../../store/configureStore';
import GetStartedModalContainer from './index.js'
import GetStartedModal from './GetStartedModal'
import GetStartedModalRenderer from './GetStartedModalRenderer'


const { store: customStore } = configureStore({
  account: {
    address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  },
  depositForm: {
    step: 'convert',
  },
});

const { store: customStore2 } = configureStore({
  account: {
    address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  },
  depositForm: {
    step: 'confirm',
  },
});

const defaultApproveTxState = {
  approveTxStatus: 'incomplete',
  approveTxHash: null
}

const defaultConvertTxState = {
  convertTxStatus: 'incomplete',
  convertTxHash: null
}

const confirmedApproveTxState = {
  approveTxStatus: 'confirmed',
  approveTxHash: '0x1'
}

const pendingApproveTxState = {
  approveTxStatus: 'sent',
  approveTxHash: '0x1',
  approveTxReceipt: null,
}

const revertedApproveTxState = {
  approveTxStatus: 'reverted',
  approveTxHash: '0x1',
  approveTxReceipt: null,
}

const confirmedConvertTxState = {
  convertTxStatus: 'confirmed',
  convertTxHash: '0x1'
}

const pendingConvertTxState = {
  convertTxStatus: 'sent',
  convertTxHash: '0x1',
  convertTxReceipt: null,
}

const revertedConvertTxState = {
  convertTxStatus: 'reverted',
  convertTxHash: '0x1',
  convertTxReceipt: null,
}


storiesOf('GetStartedModal', module)
  .addDecorator(withKnobs)
  .add(
    'Connected GetStartedModal',
    withInfo({
      source: false,
    })(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalContainer />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModal (Step 1)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModal
            step="1"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            ETHBalance={0}
            WETHBalance={0}
            WETHAllowance={0}
            approveTxState={defaultApproveTxState}
            convertTxState={defaultConvertTxState}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 1)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="1"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={false}
            userHasWETH={false}
            userHasApprovedWETH={false}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - No ETH/No WETH/No Allowance)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={false}
            userHasWETH={false}
            userHasApprovedWETH={false}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - ETH/No WETH/No Allowance)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={false}
            userHasApprovedWETH={false}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - ETH/WETH/No Allowance)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={true}
            userHasApprovedWETH={false}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - ETH/WETH/Allowance)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={true}
            userHasApprovedWETH={true}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 3)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="3"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={true}
            userHasApprovedWETH={true}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxState={null}
            convertTxState={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - Transactions confirmed)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={true}
            userHasApprovedWETH={true}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxStatus={confirmedApproveTxState.approveTxStatus}
            approveTxHash={confirmedApproveTxState.approveTxHash}
            convertTxStatus={confirmedConvertTxState.convertTxStatus}
            convertTxHash={confirmedConvertTxState.convertTxHash}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'GetStartedModalRenderer (Step 2 - Transactions pending)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <GetStartedModalRenderer
            step="2"
            goToFirstStep={action('goToFirstStep')}
            goToSecondStep={action('goToSecondStep')}
            goToThirdStep={action('goToThirdStep')}
            userHasETH={true}
            userHasWETH={false}
            userHasApprovedWETH={false}
            convertETH={action('convertETH')}
            approveWETH={action('approveWETH')}
            ETHBalance={0}
            WETHBalance={0}
            convertAmount={0}
            convertFraction={0}
            changeConvertETHFraction={action('changeConvertETHFraction')}
            ETHAddress={'0x7df6035a91f2c58d229907AF4D9d5Fc12737F21e'}
            approveTxStatus={pendingApproveTxState.approveTxStatus}
            approveTxHash={pendingApproveTxState.approveTxHash}
            convertTxStatus={pendingConvertTxState.convertTxStatus}
            convertTxHash={pendingConvertTxState.convertTxHash}
          />
        </Card>
      </div>
    ))
  )