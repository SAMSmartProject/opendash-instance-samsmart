import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import { useDataService } from "@opendash/plugin-timeseries";
import { Empty } from "antd";
import { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import * as React from "react";
import { ConfigInterface, HistoryDataType, TransformedDataType } from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ config, ...context }) => {
    const t = useTranslation();
    const DataService = useDataService();
    const { width, height } = context.useContainerSize();

    context.setName(
      t("echarts:openports.title", {
        name: context
          .useItemDimensionConfig()
          .map(([item, dimension]) => DataService.getItemName(item, dimension))
          .join(", "),
      })
    );

    const legend = [
      {
        type: "group",
        left: 10,
        top: 60,
        children: [
          {
            type: "text",
            left: 0,
            top: 0,
            style: {
              text: t("echarts:openports.legend.headline"),
              fontSize: 14,
              fontWeight: "bold",
              fill: "#333",
            },
          },
          {
            type: "circle",
            left: 0,
            top: 20,
            shape: {
              width: 12,
              height: 12,
              r: 6,
            },
            style: {
              fill: "#ff6b6b",
            },
          },
          {
            type: "text",
            left: 18,
            top: 20,
            style: {
              text: t("echarts:openports.legend.wellknown"),
              fontSize: 12,
              fill: "#666",
            },
          },
          {
            type: "circle",
            left: 0,
            top: 40,
            shape: {
              width: 12,
              height: 12,
              r: 6,
            },
            style: {
              fill: "#4ecdc4",
            },
          },
          {
            type: "text",
            left: 18,
            top: 40,
            style: {
              text: t("echarts:openports.legend.registered"),
              fontSize: 12,
              fill: "#666",
            },
          },
          {
            type: "circle",
            left: 0,
            top: 60,
            shape: {
              width: 12,
              height: 12,
              r: 6,
            },
            style: {
              fill: "#45b7d1",
            },
          },
          {
            type: "text",
            left: 18,
            top: 60,
            style: {
              text: t("echarts:openports.legend.dynamic"),
              fontSize: 12,
              fill: "#666",
            },
          },
        ],
      },
    ];

    const tooltip = {
      trigger: "item",
      formatter: (params: any) => {
        const { data, value } = params;
        if (data.children) {
          // IP address level
          return `<strong>${data.name}</strong><br/>${t(
            "echarts:openports.tooltip.openports",
            { count: value }
          )}`;
        } else {
          // Port level
          return `<strong>${data.name}</strong><br/>IP: ${
            params.treePathInfo[params.treePathInfo.length - 2]?.name ||
            "Unknown"
          }`;
        }
      },
    };

    function createSunburstData(
      ipPortMap: Map<string, Set<number>>
    ): TransformedDataType[] {
      // Transform to sunburst data structure
      return Array.from(ipPortMap.entries()).map(([ip, ports]) => {
        const portArray = Array.from(ports).sort((a, b) => a - b);

        // Generate colors for ports based on port ranges
        const getPortColor = (port: number) => {
          if (port < 1024) return "#ff6b6b"; // Well-known ports - red
          if (port < 49152) return "#4ecdc4"; // Registered ports - teal
          return "#45b7d1"; // Dynamic/private ports - blue
        };

        return {
          name: ip,
          value: portArray.length, // Number of open ports
          itemStyle: {
            color: "#2c3e50", // Dark color for IP addresses
          },
          children: portArray.map((port) => ({
            name: `Port ${port}`,
            value: 1, // Each port has equal weight
            itemStyle: {
              color: getPortColor(port),
            },
          })),
        };
      });
    }

    const chartConfig: EChartsOption = context.useFetchDimensionValues(
      {},
      (history) => {
        // Group data by IP address and collect all ports
        const ipPortMap = new Map<string, Set<number>>();

        history.forEach(([item, dimension, dataPoints]) => {
          dataPoints.forEach((dataPoint: HistoryDataType) => {
            if (
              dataPoint.value &&
              dataPoint.value.ip &&
              dataPoint.value.ports
            ) {
              const { ip, ports } = dataPoint.value;

              if (!ipPortMap.has(ip)) {
                ipPortMap.set(ip, new Set<number>());
              }

              ports.forEach((port) => {
                ipPortMap.get(ip)!.add(port);
              });
            }
          });
        });

        return {
          title: {
            show: false,
          },
          tooltip: tooltip,
          series: [
            {
              name: t("echarts:openports.chart.title"),
              type: "sunburst",
              data: createSunburstData(ipPortMap),
              radius: [30, Math.min(width, height) * 0.35],
              center: ["50%", "50%"],
              sort: undefined,
              emphasis: {
                focus: "ancestor",
              },
              levels: [
                {}, // Root level
                {
                  // IP addresses level
                  r0: 30,
                  r: 80,
                  label: {
                    rotate: "tangential",
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                  },
                  itemStyle: {
                    borderWidth: 2,
                    borderColor: "#fff",
                  },
                },
                {
                  // Ports level
                  r0: 80,
                  r: Math.min(width, height) * 0.35,
                  label: {
                    rotate: "tangential",
                    fontSize: 10,
                    color: "#fff",
                  },
                  itemStyle: {
                    borderWidth: 1,
                    borderColor: "#fff",
                  },
                },
              ],
            },
          ],
          graphic: legend,
        } as EChartsOption;
      },
      (item, dimension, value: HistoryDataType, index) => {
        const ipPortMap = new Map<string, Set<number>>();

        if (value.value && value.value.ip && value.value.ports) {
          const { ip, ports } = value.value;

          if (!ipPortMap.has(ip)) {
            ipPortMap.set(ip, new Set<number>());
          }

          ports.forEach((port) => {
            ipPortMap.get(ip)!.add(port);
          });
        }

        return {
          title: {
            show: false,
          },
          tooltip: tooltip,
          series: [
            {
              name: t("echarts:openports.chart.title"),
              type: "sunburst",
              data: createSunburstData(ipPortMap),
              radius: [30, Math.min(width, height) * 0.35],
              center: ["50%", "50%"],
              sort: undefined,
              emphasis: {
                focus: "ancestor",
              },
              levels: [
                {}, // Root level
                {
                  // IP addresses level
                  r0: 30,
                  r: 80,
                  label: {
                    rotate: "tangential",
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                  },
                  itemStyle: {
                    borderWidth: 2,
                    borderColor: "#fff",
                  },
                },
                {
                  // Ports level
                  r0: 80,
                  r: Math.min(width, height) * 0.35,
                  label: {
                    rotate: "tangential",
                    fontSize: 10,
                    color: "#fff",
                  },
                  itemStyle: {
                    borderWidth: 1,
                    borderColor: "#fff",
                  },
                },
              ],
            },
          ],
          graphic: legend,
        } as EChartsOption;
      }
    ) || { series: [] };

    context.setLoading(false);

    return (
      <>
        {typeof chartConfig !== "undefined" ? (
          <ReactECharts
            option={chartConfig}
            style={{ height: height, width: width }}
          />
        ) : (
          <Empty />
        )}
      </>
    );
  }
);
