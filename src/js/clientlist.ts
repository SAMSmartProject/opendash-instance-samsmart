import { Client } from "@opendash/core";

export const clients: Client[] = [
  {
    id: "samsmart",
    hostnames: ["samsmart.hosts.openinc.de", "localhost", "127.0.0.1"],
    fallbackClient: false,
    openWareHost: "samsmart.hosts.openinc.de",
    openWareSecure: true,
    parseHost: "https://samsmart.hosts.openinc.de/parse",
    parseAppId: "openinc",
    feedbackURL: null,
    feedbackAssigned: null,
    logoImage: "/SAMSmartLogo-Farbe.png",
    documentationURL: null,
    devHost: false,
    parseJSKey: "",
  },
];
