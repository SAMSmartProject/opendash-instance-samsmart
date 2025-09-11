import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import { Table, Tag } from "antd";
import * as React from "react";
import { ConfigInterface } from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ config, ...context }) => {
    const t = useTranslation();

    context.setLoading(false);
    context.setName(t("app:widgets.example.title"));

    const { height, width } = context.useContainerSize();
    const history = context.useFetchDimensionValues();

    const ip = [];
    const uniqueArrays = [];
    let ports = [];
    const inner = [];
    var uniquePortArray = [];
    const map = new Map(); // Map to store string representations of arrays

    if (history.length > 0) {
      console.log("history", history);
      history[0][2].forEach((element) => {
        ip.push(Object.values(element.value));
      });

      //sort out doubles
      for (const arr of ip) {
        const arrString = JSON.stringify(arr); // Convert array to string
        // Check if the string representation is already in the map
        if (!map.has(arrString)) {
          map.set(arrString, true); // Add the string representation to the map
          uniqueArrays.push(arr); // Add the array to the uniqueArrays array
        }
      }

      console.log("uniqueArrays", uniqueArrays);

      let length = uniqueArrays.length;

      const result = [];

      //remove duplicates
      uniquePortArray = ports.filter(
        (item, index) => ports.indexOf(item) === index
      );

      //combine the ports of entrys with the same ip
      /*
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length - 1; k++) {
          if (uniqueArrays[k][0] === uniqueArrays[j][0] && j != k) {
            console.log("test");
            uniqueArrays[j][1].concat(uniqueArrays[k][1]);
            //uniqueArrays[k].splice(k, 1);
          }
        }
      }
      */

      for (let l = 0; l < uniqueArrays.length; l++) {
        for (let j = l + 1; j < uniqueArrays.length; j++) {
          if (uniqueArrays[l][0] === uniqueArrays[j][0]) {
            uniqueArrays[l][1] = uniqueArrays[l][1].concat(uniqueArrays[j][1]);
            uniqueArrays.splice(j, 1);
            j--; // Decrement j to account for the removed element
          }
        }
      }

      console.log("unique after operation:", uniqueArrays);

      const dataSource = [];

      //for (const [index, arr] of uniqueArrays.entries()) {
      let i = 0;
      uniqueArrays.forEach((element) => {
        const ip = element[0];

        const ports = element[1].map((port) => port); // Transforming ports array

        dataSource.push({
          key: i++,
          ip: ip,
          ports: ports,
        });
      });

      const columns = [
        {
          title: "IP",
          dataIndex: "ip",
          key: "ip",
        },
        {
          title: "Open Ports",
          dataIndex: "ports",
          key: "Ports",
          render: (text, record, index) => {
            return (
              <>
                {record.ports.map((ports) => {
                  console.log("typeof:", typeof ports);
                  let stringport = ports.toString();
                  return <Tag color={checkPort(stringport)}>{stringport}</Tag>;
                })}
              </>
            );
          },
        },
      ];

      function checkPort(port: string) {
        const red_ports = [
          "20",
          "21",
          "22",
          "23",
          "69",
          "3389",
          "5900",
          "5901",
          "5902",
          "512",
          "513",
          "514",
          "873",
          "53",
          "111",
          "2049",
          "135",
          "137",
          "138",
          "139",
          "445",
          "161",
          "389",
          "25",
          "110",
          "143",
          "80",
          "8000",
          "8080",
          "8888",
          "1433",
          "1521",
          "3306",
          "5000",
          "5432",
          "6379",
          "27017",
          "27018",
          "585",
        ];

        switch (port) {
          case "80":
          case "443":
          case "22":
          case "80":
          case "5060":
            return "green";
          case "2":
          case "3":
          case "5":
          case "25":
          case "27":
          case "29":
          case "31":
          case "33":
          case "38":
          case "39":
          case "41":
          case "42":
          case "44":
          case "45":
          case "46":
          case "48":
          case "50":
          case "52":
          case "54":
          case "55":
          case "56":
          case "58":
          case "62":
          case "63":
          case "64":
          case "65":
          case "66":
          case "67":
          case "68":
          case "76":
          case "78":
          case "82":
          case "83":
          case "89":
          case "90":
          case "91":
          case "92":
          case "93":
          case "94":
          case "96":
          case "97":
          case "98":
          case "99":
          case "123":
          case "151":
          case "161":
          case "165":
          case "169":
          case "180":
          case "500":
            return "yellow";
            red_ports.forEach((element) => {
              if (port === element) return "red";
            });
          default:
            return "green";
        }
        return "default";

        red_ports.forEach((element) => {
          if (port === element) return "red";
        });
      }

      return (
        /*
        <div>
          <table>
            <tbody>
              {uniqueArrays.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        */
        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      );
    }
  }
);
