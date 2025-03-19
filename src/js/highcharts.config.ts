import { onLanguageChange } from "@opendash/i18n";
import Highcharts from "highcharts/highstock";

require("highcharts/highcharts-more")(Highcharts);
require("highcharts-regression")(Highcharts);
require("highcharts/modules/boost")(Highcharts);
require("highcharts/modules/heatmap")(Highcharts);
require("highcharts/modules/histogram-bellcurve")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);
require("highcharts/modules/sankey")(Highcharts);
require("highcharts/modules/gantt")(Highcharts);
require("highcharts/modules/dependency-wheel")(Highcharts);

let monthsA = [] as string[];
let shortMonthsA = [] as string[];
let weekdaysA = [] as string[];
let shortWeekdaysA = [] as string[];
let zoom1 = "";
let zoom2 = "";

onLanguageChange((lang) => {
  let zoom1 = "Reset Zoom";
  let zoom2 = "Reset to Zoom Level 1";
  let monthsA = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let shortMonthsA = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let weekdaysA = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let shortWeekdaysA = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  if (lang === "de") {
    zoom1 = "Zurücksetzen des Zooms";
    zoom2 = "Zoom Level 0";
    monthsA = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "Augsut",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    shortMonthsA = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ];
    weekdaysA = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    shortWeekdaysA = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  }
  window.Highcharts.setOptions({
    lang: {
      resetZoom: zoom1,
      resetZoomTitle: zoom2,
      months: monthsA,
      weekdays: weekdaysA,
      shortWeekdays: shortWeekdaysA,
      shortMonths: shortMonthsA,
    },
  });
});

window.Highcharts = Highcharts;
window.Highcharts.setOptions({
  boost: {
    useGPUTranslations: false,
    //  useAlpha: false,
    enabled: true,
  },
  time: {
    useUTC: false,
  },
  plotOptions: {
    series: {
      turboThreshold: 1,
    },
  },

  lang: {
    resetZoom: zoom1,
    resetZoomTitle: zoom2,
    months: monthsA,
    weekdays: weekdaysA,
    shortWeekdays: shortWeekdaysA,
    shortMonths: shortMonthsA,
  },
});
