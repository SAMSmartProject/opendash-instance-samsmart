import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_Bikes_AllowedAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  tenant: Tenant;
  value: number;
}

export class GTFS_Bikes_Allowed extends Parse.Object<GTFS_Bikes_AllowedAttributes> {
  static className: string = "OD3_GTFS_Bikes_Allowed";

  constructor(data?: Partial<GTFS_Bikes_AllowedAttributes>) {
    super("OD3_GTFS_Bikes_Allowed", data as GTFS_Bikes_AllowedAttributes);
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

  get value(): number {
    return super.get("value");
  }
  set value(value: number) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Bikes_Allowed", GTFS_Bikes_Allowed);

