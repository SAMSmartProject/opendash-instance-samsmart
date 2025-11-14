import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_Route_TypeAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  tenant: Tenant;
  transportation_device: string;
  value: number;
}

export class GTFS_Route_Type extends Parse.Object<GTFS_Route_TypeAttributes> {
  static className: string = "OD3_GTFS_Route_Type";

  constructor(data?: Partial<GTFS_Route_TypeAttributes>) {
    super("OD3_GTFS_Route_Type", data as GTFS_Route_TypeAttributes);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get transportation_device(): string {
    return super.get("transportation_device");
  }
  set transportation_device(value: string) {
    super.set("transportation_device", value);
  }

  get value(): number {
    return super.get("value");
  }
  set value(value: number) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Route_Type", GTFS_Route_Type);

