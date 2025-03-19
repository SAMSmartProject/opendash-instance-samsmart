interface Client {
  id: string;
  hostnames: Array<string>;
  fallbackClient: boolean;
  openWareHost: string;
  openWareSecure: boolean;
  parseHost: string;
  parseAppId: string;
  feedbackURL: string | null;
  feedbackAssigned: string | null;
  logoImage: string | null;
  documentationURL: string | null;
  devHost: boolean | null;
}

const clients: Client[] = [
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
  },
];

class ClientSelector {
  private client: Client | undefined;

  constructor() {
    //Check if the current hostname is a dev host
    //If so, use the client with the devHost flag

    if (!this.client) {
      //Find the fitting client for the current hostname
      this.client = clients.find((client) =>
        client.hostnames.includes(window.location.hostname)
      );
    }

    //If no client was found, use the fallback client
    if (!this.client) {
      this.client = clients.find((client) => client.fallbackClient);
    }
  }

  getOpenWareHost() {
    return this.client ? this.client.openWareHost : "";
  }

  getOpenWareSecure() {
    return this.client ? this.client.openWareSecure : false;
  }

  getParseHost = () => {
    return this.client ? this.client.parseHost : "";
  };

  getParseAppId = () => {
    return this.client ? this.client.parseAppId : "";
  };

  getFeedbackURL = () => {
    return this.client ? this.client.feedbackURL : "";
  };

  getFeedbackAssigned = () => {
    return this.client ? this.client.feedbackAssigned : "";
  };

  getLogoImage = () => {
    return this.client ? this.client.logoImage : "";
  };

  getClient = () => {
    return this.client;
  };

  getClientId = () => {
    return this.client ? this.client.id : "";
  };

  getDocumentationURL = () => {
    return this.client ? this.client.documentationURL : "";
  };

  getDevHost = () => {
    return this.client ? this.client.devHost : "";
  };
}

const clientselector = new ClientSelector();

if (
  clientselector.getClient() === undefined ||
  clientselector.getClient() === null
) {
  console.error("No client selected");
  throw new Error("No client selected");
}

console.log("Connect to client:", clientselector.getClientId());

export default clientselector;
