import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface Monitoring_DataHierachiesAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  hierarchies: any[];
  name: string;
  source: Source;
  tenant: Tenant;
}

export class Monitoring_DataHierachies extends Parse.Object<Monitoring_DataHierachiesAttributes> {
  static className: string = "OD3_Monitoring_DataHierachies";

  constructor(data?: Partial<Monitoring_DataHierachiesAttributes>) {
    super("OD3_Monitoring_DataHierachies", data as Monitoring_DataHierachiesAttributes);
  }

  get hierarchies(): any[] {
    return super.get("hierarchies");
  }
  set hierarchies(value: any[]) {
    super.set("hierarchies", value);
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
}

Parse.Object.registerSubclass("OD3_Monitoring_DataHierachies", Monitoring_DataHierachies);

