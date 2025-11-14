import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_LevelAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  level_index: number;
  level_name?: string | undefined;
  tenant: Tenant;
}

export class GTFS_Level extends Parse.Object<GTFS_LevelAttributes> {
  static className: string = "OD3_GTFS_Level";

  constructor(data?: Partial<GTFS_LevelAttributes>) {
    super("OD3_GTFS_Level", data as GTFS_LevelAttributes);
  }

  get level_index(): number {
    return super.get("level_index");
  }
  set level_index(value: number) {
    super.set("level_index", value);
  }

  get level_name(): string | undefined {
    return super.get("level_name");
  }
  set level_name(value: string | undefined) {
    super.set("level_name", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Level", GTFS_Level);

