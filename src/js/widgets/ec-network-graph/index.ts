import { createWidget } from "@opendash/plugin-monitoring";
import React from "react";
import { ConfigInterface } from "./types";

export default createWidget<ConfigInterface>({
  type: "opendash-widget-network-graph",
  meta: {},
  displayComponent: React.lazy(() => import("./component")),
  settingsComponent: React.lazy(() => import("./settings")),
  dataItems: {
    select: "dimension",
    min: 1,
    max: 1,
    types: ["Object"],
  },
  dataFetching: {
    live: true,
    history: true,
  },
  dataExplorer: {
    title: "echarts:network.graph.name",
    description: "echarts:network.graph.description",
    icon: "fa:chart-network",
    config: {},
  },
  presets: [
    {
      label: "echarts:network.graph.name",
      description: "echarts:network.graph.description",
      tags: ["network"],
      layout: [6, 6] as [number, number],
      widget: {
        config: {
          _history: {
            historyType: "relative",
            value: 1,
            unit: "day",
          },
          gateway: "",
        },
      },
      imageLink: async () => (await import("./preset.png")).default,
    },
  ],
});
