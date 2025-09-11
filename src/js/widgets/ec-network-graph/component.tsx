import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import { useDataService } from "@opendash/plugin-timeseries";
import { Empty } from "antd";
import { EChartsOption, GraphSeriesOption } from "echarts";
import ReactECharts from "echarts-for-react";
import * as React from "react";
import {
  ConfigInterface,
  HistoryDataType,
  PreTransformedDataType,
} from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ config, ...context }) => {
    const t = useTranslation();
    const DataService = useDataService();
    const { width, height } = context.useContainerSize();
    let edges: GraphSeriesOption["edges"] = [];

    context.setName(
      t("echarts:network.graph.name", {
        name: context
          .useItemDimensionConfig()
          .map(([item, dimension]) => DataService.getItemName(item, dimension))
          .join(", "),
      })
    );

    function createEdges(data: PreTransformedDataType[]) {
      let currentEdgeId = "";
      let increment = 0;

      data
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            "id" in item &&
            item.id &&
            item.type === "node"
        )
        .sort((a, b) => (a.id < b.id ? -1 : 1))
        .forEach((item) => {
          const ipPointId = item.id.toString();
          const source = config.gateway ? config.gateway : "-1";
          const date = item.value?.toString().split("-")[0] || "";

          //If currentEdgeId is different from newEdgeId, set increment to 0
          if (currentEdgeId !== ipPointId) {
            increment = 0;
          }

          //Set currentEdgeId to item.id
          currentEdgeId = ipPointId;

          // Only add edges if source and target are different
          if (ipPointId !== source) {
            edges!.push({
              source: source,
              target: ipPointId,
              label: {
                show: true,
                textMargin: 4,
                position: "insideMiddleTop",
                formatter:
                  date && date.length > 0 && !isNaN(Number(date))
                    ? new Date(Number(date)).toLocaleString()
                    : "",
              },
              lineStyle: {
                color: "#585858ff",
                cap: "round",
                width: 3,
                curveness: config.combineDuplicates
                  ? 0 + (increment / 10) * (increment % 2 === 0 ? 1 : -1)
                  : 0,
              },
            });
          }

          // Increment the increment variable
          increment++;
        });
    }

    const chartConfig: EChartsOption = context.useFetchDimensionValues(
      {},
      (history) => {
        const data: Array<PreTransformedDataType> = history[0][2]
          .map((data, index) => {
            // If config.combineDuplicates is true, the point is only added once and identified by the ip address
            // If false, the point is added for each timestamp and identified by ip-timestamp
            // This can lead to multiple points with the same ip address, but different timestamps
            // The edges are always drawn to the timestamp-identified points, so the graph looks better
            // But if there are many data points, it can lead to a very cluttered graph
            const value: HistoryDataType = data.value;

            const ipPointId = config.combineDuplicates
              ? value.ip
              : data.date + "-" + value.ip;

            const ipPointName = value.ip;

            const ports = value.ports.map((port) => {
              const portPointId = ipPointId + "-" + port.toString();

              const portPointName = port.toString();

              edges!.push({
                source: ipPointId,
                target: portPointId,
              });

              return {
                type: "edge",
                id: portPointId,
                value: portPointId,
                name: portPointName,
              };
            });

            return [
              {
                type: "node",
                id: ipPointId,
                value: data.date + "-" + value.ip,
                name: ipPointName,
              },
              ...ports,
            ];
          })
          .flat();

        if (!config.gateway) {
          data.unshift({
            type: "node",
            name: "No Gateway",
            value: "No Gateway",
            fixed: true,
            symbolSize: 20,
            x: width / 2,
            y: height / 2,
            id: "-1",
          });
        } else {
          data.unshift({
            type: "node",
            name: config.gateway,
            value: config.gateway,
            fixed: true,
            symbolSize: 20,
            x: width / 2,
            y: height / 2,
            id: config.gateway,
          });
        }

        createEdges(data);

        const uniqueData: GraphSeriesOption["data"] = Array.from(
          new Map(
            data.map((item) => {
              if (item && typeof item === "object" && "id" in item && item.id) {
                return [item.id, item];
              }

              return [Math.floor(Math.random() * 1000000).toString(), item];
            })
          ).values()
        );

        return {
          color: [config.color || "#000000"],
          tooltip: {
            show: true,
            trigger: "item",
            triggerOn: "mousemove",
            showContent: true,
            formatter: (params) => {
              const p = params as any;
              if (p.dataType === "edge") {
                const targetname: string[] = p.data.target.split("-");
                const sourcename: string[] = p.data.source.split("-");

                // If targetname has 3 parts, its a port
                // If it has 2 parts, its an IP
                if (targetname.length === 3 && sourcename.length === 2) {
                  return t(
                    "echarts:network.graph.tooltip.connection.iptoport",
                    {
                      ip: sourcename[1],
                      port: targetname[2],
                    }
                  );
                } else if (targetname.length === 2 && sourcename.length === 2) {
                  return t("echarts:network.graph.tooltip.connection.iptoip", {
                    sourceip: sourcename[1],
                    targetip: targetname[1],
                  });
                } else if (sourcename.length === 1 && targetname.length === 2) {
                  return t(
                    "echarts:network.graph.tooltip.connection.iptoport",
                    {
                      ip: sourcename[0],
                      port: targetname[1],
                    }
                  );
                }

                return p.data.source + " --> " + p.data.target;
              }
              if (p.dataType === "node") {
                const name = p.name.split("-");
                if (name.length === 3) {
                  return t("echarts:network.graph.tooltip.portnumber", {
                    port: name[2],
                  });
                } else if (name.length === 2) {
                  return t("echarts:network.graph.tooltip.ipaddress", {
                    ip: name[1],
                  });
                }
              }
              return p.name;
            },
          },
          series: [
            {
              zoom: 1.2,
              roam: true,
              type: "graph",
              layout: "force",
              animation: false,
              data: uniqueData,
              color: config.color || "#000000",
              force: {
                // initLayout: 'circular'
                gravity: 0,
                repulsion: 100,
                edgeLength: 20,
              },
              edges: edges,
              label: {
                show: true,
                position: "top",
                formatter: (value) => {
                  const fullname = value.name.split("-");
                  if (fullname.length === 3) {
                    return fullname[2];
                  } else if (fullname.length === 2) {
                    return fullname[1];
                  }
                  return value.name;
                },
                fontSize: 10,
                color: "#000000",
              },
            },
          ],
        } as EChartsOption;
      },
      (item, dimension, value, index) => {}
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
          <Empty></Empty>
        )}
      </>
    );
  }
);
