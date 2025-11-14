import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface Monitoring_ParseTableSensorAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  dateColumn?: string | undefined;
  name: string;
  query: any;
  source: Source;
  tenant: Tenant;
}

export class Monitoring_ParseTableSensor extends Parse.Object<Monitoring_ParseTableSensorAttributes> {
  static className: string = "OD3_Monitoring_ParseTableSensor";

  constructor(data?: Partial<Monitoring_ParseTableSensorAttributes>) {
    super("OD3_Monitoring_ParseTableSensor", data as Monitoring_ParseTableSensorAttributes);
  }

  get dateColumn(): string | undefined {
    return super.get("dateColumn");
  }
  set dateColumn(value: string | undefined) {
    super.set("dateColumn", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get query(): any {
    return super.get("query");
  }
  set query(value: any) {
    super.set("query", value);
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
}

Parse.Object.registerSubclass("OD3_Monitoring_ParseTableSensor", Monitoring_ParseTableSensor);

