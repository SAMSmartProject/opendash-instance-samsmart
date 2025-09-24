import { createWidget } from "@opendash/plugin-monitoring";
import React from "react";
import { ConfigInterface } from "./types";

export default createWidget<ConfigInterface>({
  type: "opendash-widget-open-ports",
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
    history: false,
  },

  presets: [
    {
      label: "echarts:openports.name",
      description: "echarts:openports.description",
      tags: ["network"],
      layout: [6, 6] as [number, number],
      widget: {
        config: {
          _history: {
            historyType: "relative",
            value: 1,
            unit: "day",
          },
        },
      },
      imageLink: async () => (await import("./preset.png")).default,
    },
  ],
});
