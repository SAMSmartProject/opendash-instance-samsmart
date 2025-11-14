import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface Monitoring_ReportImageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  config: any;
  name: string;
  source: Source;
  tenant: Tenant;
  type: string;
}

export class Monitoring_ReportImage extends Parse.Object<Monitoring_ReportImageAttributes> {
  static className: string = "OD3_Monitoring_ReportImage";

  constructor(data?: Partial<Monitoring_ReportImageAttributes>) {
    super("OD3_Monitoring_ReportImage", data as Monitoring_ReportImageAttributes);
  }

  get config(): any {
    return super.get("config");
  }
  set config(value: any) {
    super.set("config", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get source(): Source {
    return super.get("source");
  }
  set source(value: Source) {
    super.set("source", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }
}

Parse.Object.registerSubclass("OD3_Monitoring_ReportImage", Monitoring_ReportImage);

