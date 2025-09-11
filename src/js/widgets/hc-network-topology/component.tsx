import { stringToColor, useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import { useDataService } from "@opendash/plugin-timeseries";
import { Empty } from "antd";
import dayjs from "dayjs";
import { AxisLabelsFormatterContextObject, Options } from "highcharts";
import * as React from "react";
import {
  HighchartsChart,
  HighchartsChartRef,
} from "../../../../../opendash/plugins/highcharts/src/components/HighchartsChart";
import { ConfigInterface } from "./types";

type SeriesData = {
  "hc-a2": string;
  date: number;
  name: string;
  x: number;
  y: number;
};

export default createWidgetComponent<ConfigInterface>(
  ({ config, ...context }) => {
    const t = useTranslation();
    const DataService = useDataService();
    const chartRef = React.useRef<HighchartsChartRef>(null);
    const { width, height } = context.useContainerSize();
    let historyData: Array<SeriesData> = null;

    context.setName(
      t("highcharts:network.topology.name", {
        name: context
          .useItemDimensionConfig()
          .map(([item, dimension]) => DataService.getItemName(item, dimension))
          .join(", "),
      })
    );

    const chartConfig = context.useFetchDimensionValues(
      {},
      (history) => {
        //Sort all data by date
        let maxY = 0;

        historyData = history[0][2]
          .sort((a, b) => a.date - b.date)
          .flatMap((hdata, dateindex): Array<SeriesData> => {
            //Check if payload is larger than maxY. If so, set maxY to new length.
            if (
              typeof hdata.value !== "undefined" &&
              typeof hdata.value.payload !== "undefined"
            ) {
              if (hdata.value.payload.length > maxY) {
                maxY = hdata.value.payload.length;
              }

              return hdata.value.payload.map(
                (value: string, payloadindex: number): SeriesData => {
                  return {
                    "hc-a2": value,
                    date: hdata.date,
                    name: value,
                    y: payloadindex,
                    x: dateindex,
                  };
                }
              );
            }
          });

        //Check how many distinct x values are in historyData
        const uniqueXValues = [
          ...new Set(historyData.filter(Boolean).map((item) => item.x)),
        ];

        // Create Highcharts series
        const name = DataService.getItemName(
          history[0][0],
          history[0][1],
          false
        );

        const highchartsOptions: Options = {
          title: null,
          subtitle: null,
          chart: {
            type: "tilemap",
          },
          accessibility: {
            description: "A network topology map.",
            screenReaderSection: {
              beforeChartFormat:
                "<h5>{chartTitle}</h5>" +
                "<div>{chartSubtitle}</div>" +
                "<div>{chartLongdesc}</div>" +
                "<div>{viewTableButton}</div>",
            },
            point: {
              descriptionFormatter: function (point) {
                return (
                  dayjs(new Date((point.options as SeriesData).date)).format(
                    "DD.MM.YYYY HH:mm:ss"
                  ) +
                  ": " +
                  point.name
                );
              },
            },
          },
          xAxis: {
            max: uniqueXValues.length - 1,
            min: 0,
            visible: true,
            labels: {
              rotation: 45,
              //Labels should be a string representation of the date
              formatter: function (ctx: AxisLabelsFormatterContextObject) {
                const firstdataelement = historyData.find(
                  (d) => d.x === ctx.pos
                );

                if (firstdataelement) {
                  return dayjs(new Date(firstdataelement.date)).format(
                    "DD.MM.YYYY HH:mm:ss"
                  );
                }
                return "";
              },
            },
          },
          legend: {
            enabled: false,
          },
          yAxis: {
            max: maxY + 1,
            min: -1,
            visible: false,
          },
          lang: {
            noData: t("opendash:ui.no_data"),
          },
          noData: {
            style: {
              fontWeight: "bold",
              fontSize: "15px",
              color: "var(--opendash-color-lightblack)",
            },
          },
          tooltip: {
            headerFormat: "",
            pointFormatter: function () {
              return t("highcharts:network.topology.tilemap.tooltip", {
                name: this.name,
              });
            },
          },
          plotOptions: {
            series: {
              threshold: 1000,
              turboThreshold: 1000,
              dataLabels: {
                enabled: true,
                format: "{point.hc-a2}",
                color: "#000000",
              },
            },
          },
          series: [
            {
              name: name,
              color: stringToColor(name),
              type: "tilemap",
              pointPadding: 5,
              tileShape: "circle",
              data: historyData,
            },
          ] as Highcharts.SeriesTilemapOptions[],
        };
        return highchartsOptions;
      },
      (item, dimension, value, index) => {}
    );

    context.setLoading(false);

    return (
      <>
        {typeof chartConfig !== "undefined" &&
        typeof chartConfig.series !== "undefined" &&
        (chartConfig.series.length || 0) > 0 &&
        // @ts-ignore
        (chartConfig.series[0].data?.length || 0) > 0 ? (
          <HighchartsChart
            ref={chartRef}
            options={chartConfig}
            width={width}
            height={height}
          />
        ) : (
          <Empty></Empty>
        )}
      </>
    );
  }
);
