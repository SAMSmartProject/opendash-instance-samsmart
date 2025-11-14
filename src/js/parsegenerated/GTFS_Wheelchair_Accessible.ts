import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_Wheelchair_AccessibleAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  tenant: Tenant;
  value: number;
}

export class GTFS_Wheelchair_Accessible extends Parse.Object<GTFS_Wheelchair_AccessibleAttributes> {
  static className: string = "OD3_GTFS_Wheelchair_Accessible";

  constructor(data?: Partial<GTFS_Wheelchair_AccessibleAttributes>) {
    super("OD3_GTFS_Wheelchair_Accessible", data as GTFS_Wheelchair_AccessibleAttributes);
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

Parse.Object.registerSubclass("OD3_GTFS_Wheelchair_Accessible", GTFS_Wheelchair_Accessible);

