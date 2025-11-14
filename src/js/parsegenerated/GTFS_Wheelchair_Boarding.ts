import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_Wheelchair_BoardingAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  condition?: string | undefined;
  description?: string | undefined;
  tenant: Tenant;
  value: number;
}

export class GTFS_Wheelchair_Boarding extends Parse.Object<GTFS_Wheelchair_BoardingAttributes> {
  static className: string = "OD3_GTFS_Wheelchair_Boarding";

  constructor(data?: Partial<GTFS_Wheelchair_BoardingAttributes>) {
    super("OD3_GTFS_Wheelchair_Boarding", data as GTFS_Wheelchair_BoardingAttributes);
  }

  get condition(): string | undefined {
    return super.get("condition");
  }
  set condition(value: string | undefined) {
    super.set("condition", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
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

Parse.Object.registerSubclass("OD3_GTFS_Wheelchair_Boarding", GTFS_Wheelchair_Boarding);

