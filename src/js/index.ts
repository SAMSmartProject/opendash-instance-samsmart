import "./highcharts.config";

import { ClientSelector, init, StorageAdapterLS } from "@opendash/core";
import { getCurrentLanguageSync } from "@opendash/i18n";
import { registerIconPack } from "@opendash/icons";
import { HighchartsPlugin } from "@opendash/plugin-highcharts";
import { $monitoring, MonitoringPlugin } from "@opendash/plugin-monitoring";
import { OpenServicePlugin } from "@opendash/plugin-openservice";
import { OpenwarePlugin } from "@opendash/plugin-openware";
import { ParsePlugin } from "@opendash/plugin-parse";
import { ParseMonitoringPlugin } from "@opendash/plugin-parse-monitoring";
import { TimeseriesPlugin } from "@opendash/plugin-timeseries";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { GlobalStyles } from "./GlobalStyles";

import timezone from "dayjs/plugin/timezone";
import Parse from "parse";
import { clients } from "./clientlist";
import { ECNetworkGraph } from "./widgets";

init("opendash", async (factory) => {
  const clientselector = ClientSelector.getInstance(clients);

  Parse.initialize(clientselector.getParseAppId(), "");
  Parse.serverURL = clientselector.getParseHost();

  // @ts-ignore
  registerIconPack(await import("@opendash/icons/dist/fa-regular.json"));
  // @ts-ignore
  registerIconPack(await import("@opendash/icons/dist/fa-solid.json"));
  // @ts-ignore
  registerIconPack(await import("@opendash/icons/dist/fa-light.json"));

  if (clientselector.getLogoImage()) {
    factory.ui.setLogoImage(clientselector.getLogoImage()!);
  }

  factory.registerGlobalComponent(GlobalStyles, {});

  // Translations
  factory.registerLanguage("en", "English", "", false);
  factory.registerLanguage("de", "Deutsch", "en", true);

  factory.registerAntDesignTranslation(
    "en",
    () => import("antd/lib/locale/en_US")
  );

  factory.registerAntDesignTranslation(
    "de",
    () => import("antd/lib/locale/de_DE")
  );

  factory.registerTranslationResolver(
    "de",
    "parse-custom",
    async () => await import("./translations/de.json")
  );

  factory.registerTranslationResolver(
    "en",
    "parse-custom",
    async () => await import("./translations/en.json")
  );

  factory.registerTranslationResolver(
    "de",
    "echarts",
    async () => await import("./translations/echarts-de.json")
  );

  factory.registerTranslationResolver(
    "en",
    "echarts",
    async () => await import("./translations/echarts-en.json")
  );

  // Adapter + Plugins

  factory.registerDeviceStorageAdapter(new StorageAdapterLS());
  await factory.use(
    new ParsePlugin({
      authLdapActive: false,
      useLiveQueries: false,
      createAccount: true,
      lostPassword: true,
      usePagination: 20,
      disableNavigationItems: false,
      disableNavigationWidgetPreset: false,
      disableNavigationNotificationSettings: false,
    })
  );

  await factory.use(new TimeseriesPlugin());
  await factory.use(new MonitoringPlugin());

  await factory.use(
    new ParseMonitoringPlugin({
      liveQueries: false,
    })
  );

  await factory.use(new OpenServicePlugin());

  await factory.use(
    new OpenwarePlugin({
      secure: clientselector.getOpenWareSecure(),
      host: clientselector.getOpenWareHost(),
      filterValuesOlderThanMS: -1,
      disableFeature: {
        menu: {
          SensorsGroup: false,
          DataPoints: false,
          DataSources: false,
          DataMeta: false,
        },
        slideshow: false,
        dataCollection: false,
        VKPI: false,
        forms: {
          dateBySensor: false,
        },
        reporting: false,
        reportingFeatures: {
          adhoc: false,
          schedule: false,
          img: false,
          export: false,
        },
      },
    })
  );

  await factory.use(new HighchartsPlugin());

  // Widgets
  // $monitoring.registerWidget(OpenPorts);
  // $monitoring.registerWidget(NetworkTopology);
  $monitoring.registerWidget(ECNetworkGraph);
}).then((app) => {
  console.log("init open.DASH");
  dayjs.locale(getCurrentLanguageSync());
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Europe/Berlin");
});
