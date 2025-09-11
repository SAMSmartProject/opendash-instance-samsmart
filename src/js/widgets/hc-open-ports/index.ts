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
    max: 3,
    types: ["Object"],
  },

  dataFetching: {
    live: true,
    history: true,
  },
  
  presets: [
    {
      label: "highcharts:explorer.ports.label",
      description: "highcharts:explorer.ports.description",
      tags: ["_other"],
      imageLink: "",
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
    },
  ],
});
