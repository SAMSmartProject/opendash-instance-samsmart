import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_DirectionAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  tenant: Tenant;
  value: number;
}

export class GTFS_Direction extends Parse.Object<GTFS_DirectionAttributes> {
  static className: string = "OD3_GTFS_Direction";

  constructor(data?: Partial<GTFS_DirectionAttributes>) {
    super("OD3_GTFS_Direction", data as GTFS_DirectionAttributes);
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

Parse.Object.registerSubclass("OD3_GTFS_Direction", GTFS_Direction);

