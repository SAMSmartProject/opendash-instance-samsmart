import Parse from "parse";
import clientselector from "./config";

Parse.initialize(clientselector.getParseAppId());
Parse.serverURL = clientselector.getParseHost();
