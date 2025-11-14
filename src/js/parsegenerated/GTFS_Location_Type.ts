import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_Location_TypeAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  name: string;
  tenant: Tenant;
  value: number;
}

export class GTFS_Location_Type extends Parse.Object<GTFS_Location_TypeAttributes> {
  static className: string = "OD3_GTFS_Location_Type";

  constructor(data?: Partial<GTFS_Location_TypeAttributes>) {
    super("OD3_GTFS_Location_Type", data as GTFS_Location_TypeAttributes);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get value(): number {
    return super.get("value");
  }
  set value(value: number) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Location_Type", GTFS_Location_Type);

