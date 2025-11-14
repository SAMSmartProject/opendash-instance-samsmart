import Parse from "parse";

export interface MIAAS_MDSEndpointAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  enabled: boolean;
  endpoint: string;
  endpointSuffix?: string | undefined;
  header: any;
  name?: string | undefined;
  source: string;
}

export class MIAAS_MDSEndpoint extends Parse.Object<MIAAS_MDSEndpointAttributes> {
  static className: string = "OD3_MIAAS_MDSEndpoint";

  constructor(data?: Partial<MIAAS_MDSEndpointAttributes>) {
    super("OD3_MIAAS_MDSEndpoint", data as MIAAS_MDSEndpointAttributes);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get endpoint(): string {
    return super.get("endpoint");
  }
  set endpoint(value: string) {
    super.set("endpoint", value);
  }

  get endpointSuffix(): string | undefined {
    return super.get("endpointSuffix");
  }
  set endpointSuffix(value: string | undefined) {
    super.set("endpointSuffix", value);
  }

  get header(): any {
    return super.get("header");
  }
  set header(value: any) {
    super.set("header", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get source(): string {
    return super.get("source");
  }
  set source(value: string) {
    super.set("source", value);
  }
}

Parse.Object.registerSubclass("OD3_MIAAS_MDSEndpoint", MIAAS_MDSEndpoint);

