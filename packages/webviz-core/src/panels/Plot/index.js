// @flow
//
//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import React, { PureComponent } from "react";

import helpContent from "./index.help.md";
import Flex from "webviz-core/src/components/Flex";
import Panel from "webviz-core/src/components/Panel";
import PanelToolbar from "webviz-core/src/components/PanelToolbar";
import type { PlotPath } from "webviz-core/src/panels/Plot/internalTypes";
import PlotChart from "webviz-core/src/panels/Plot/PlotChart";
import PlotLegend from "webviz-core/src/panels/Plot/PlotLegend";
import PlotMenu from "webviz-core/src/panels/Plot/PlotMenu";

export const plotableRosTypes = [
  "bool",
  "int8",
  "uint8",
  "int16",
  "uint16",
  "int32",
  "uint32",
  "int64",
  "uint64",
  "float32",
  "float64",
];

export type PlotConfig = {
  paths: PlotPath[],
  minYValue: string,
  maxYValue: string,
  isYAxisLocked: boolean,
};

type Props = {
  config: PlotConfig,
  saveConfig: ($Shape<PlotConfig>) => void,
};

class Plot extends PureComponent<Props> {
  static panelType = "Plot";
  static defaultConfig = { paths: [], minYValue: "", maxYValue: "", isYAxisLocked: false };

  render() {
    const { saveConfig } = this.props;
    const { minYValue, maxYValue, isYAxisLocked } = this.props.config;
    let { paths } = this.props.config;
    if (!paths.length) {
      paths = [{ value: "", enabled: true, timestampMethod: "receiveTime" }];
    }

    return (
      <Flex col clip center style={{ position: "relative" }}>
        <PanelToolbar
          helpContent={helpContent}
          floating
          menuContent={
            <PlotMenu
              minYValue={minYValue}
              maxYValue={maxYValue}
              isYAxisLocked={isYAxisLocked}
              saveConfig={saveConfig}
            />
          }
        />
        <PlotChart
          paths={paths}
          minYValue={parseFloat(minYValue)}
          maxYValue={parseFloat(maxYValue)}
          isYAxisLocked={isYAxisLocked}
        />
        <PlotLegend paths={paths} onChange={this.props.saveConfig} />
      </Flex>
    );
  }
}

export default Panel<PlotConfig>(Plot);
