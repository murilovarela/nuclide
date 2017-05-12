/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {Process, KillProcessCallback} from '../types';
import type {DeviceAction} from '../types';

import {Icon} from '../../../nuclide-ui/Icon';
import React from 'react';
import {InfoTable} from './InfoTable';
import {ProcessTable} from './ProcessTable';
import {Button, ButtonSizes} from '../../../nuclide-ui/Button';

type Props = {
  goToRootPanel: () => void,
  infoTables: Map<string, Map<string, string>>,
  processTable: Array<Process>,
  killProcess: ?KillProcessCallback,
  deviceActions: DeviceAction[],
};

export class DevicePanel extends React.Component {
  props: Props;

  _createInfoTables(): React.Element<any>[] {
    return Array.from(
      this.props.infoTables.entries(),
    ).map(([title, infoTable]) => (
      <div className="block" key={title}>
        <InfoTable title={title} table={infoTable} />
      </div>
    ));
  }

  _createProcessTable(): React.Element<any> {
    if (this.props.processTable.length === 0) {
      return <div />;
    }
    const title = 'Process Table';
    return (
      <div className="block" key={title}>
        <ProcessTable
          title={title}
          table={this.props.processTable}
          killProcess={this.props.killProcess}
        />
      </div>
    );
  }

  _getActions(): React.Element<any> {
    const actions = this.props.deviceActions.map(action => (
      <Button
        size={ButtonSizes.SMALL}
        onClick={() => action.callback()}
        key={action.name}>
        {action.name}
      </Button>
    ));
    return (
      <div className="block nuclide-device-panel-actions-container">
        {actions}
      </div>
    );
  }

  _getBackButton(): React.Element<any> {
    return (
      <div className="block">
        <span>
          <a
            className="nuclide-device-panel-link-with-icon"
            onClick={() => this.props.goToRootPanel()}>
            <Icon icon="chevron-left">
              Choose another device
            </Icon>
          </a>
        </span>
      </div>
    );
  }

  render(): React.Element<any> {
    return (
      <div>
        {this._getBackButton()}
        {this._getActions()}
        {this._createInfoTables()}
        {this._createProcessTable()}
      </div>
    );
  }
}
