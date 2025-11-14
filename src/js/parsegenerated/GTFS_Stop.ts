import Parse from "parse";

import type { GTFS_Level } from "./GTFS_Level";
import type { GTFS_Location_Type } from "./GTFS_Location_Type";
import type { Tenant } from "./Tenant";
import type { GTFS_Wheelchair_Boarding } from "./GTFS_Wheelchair_Boarding";

export interface GTFS_StopAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  level_id?: GTFS_Level | undefined;
  location_type?: GTFS_Location_Type | undefined;
  parent_station?: GTFS_Stop | undefined;
  platform_code?: string | undefined;
  stop_code?: string | undefined;
  stop_desc?: string | undefined;
  stop_id: string;
  stop_lat?: string | undefined;
  stop_lon?: string | undefined;
  stop_name?: string | undefined;
  stop_timezone?: string | undefined;
  stop_url?: string | undefined;
  tenant: Tenant;
  wheelchair_boarding?: GTFS_Wheelchair_Boarding | undefined;
  zone_id?: string | undefined;
}

export class GTFS_Stop extends Parse.Object<GTFS_StopAttributes> {
  static className: string = "OD3_GTFS_Stop";

  constructor(data?: Partial<GTFS_StopAttributes>) {
    super("OD3_GTFS_Stop", data as GTFS_StopAttributes);
  }

  get level_id(): GTFS_Level | undefined {
    return super.get("level_id");
  }
  set level_id(value: GTFS_Level | undefined) {
    super.set("level_id", value);
  }

  get location_type(): GTFS_Location_Type | undefined {
    return super.get("location_type");
  }
  set location_type(value: GTFS_Location_Type | undefined) {
    super.set("location_type", value);
  }

  get parent_station(): GTFS_Stop | undefined {
    return super.get("parent_station");
  }
  set parent_station(value: GTFS_Stop | undefined) {
    super.set("parent_station", value);
  }

  get platform_code(): string | undefined {
    return super.get("platform_code");
  }
  set platform_code(value: string | undefined) {
    super.set("platform_code", value);
  }

  get stop_code(): string | undefined {
    return super.get("stop_code");
  }
  set stop_code(value: string | undefined) {
    super.set("stop_code", value);
  }

  get stop_desc(): string | undefined {
    return super.get("stop_desc");
  }
  set stop_desc(value: string | undefined) {
    super.set("stop_desc", value);
  }

  get stop_id(): string {
    return super.get("stop_id");
  }
  set stop_id(value: string) {
    super.set("stop_id", value);
  }

  get stop_lat(): string | undefined {
    return super.get("stop_lat");
  }
  set stop_lat(value: string | undefined) {
    super.set("stop_lat", value);
  }

  get stop_lon(): string | undefined {
    return super.get("stop_lon");
  }
  set stop_lon(value: string | undefined) {
    super.set("stop_lon", value);
  }

  get stop_name(): string | undefined {
    return super.get("stop_name");
  }
  set stop_name(value: string | undefined) {
    super.set("stop_name", value);
  }

  get stop_timezone(): string | undefined {
    return super.get("stop_timezone");
  }
  set stop_timezone(value: string | undefined) {
    super.set("stop_timezone", value);
  }

  get stop_url(): string | undefined {
    return super.get("stop_url");
  }
  set stop_url(value: string | undefined) {
    super.set("stop_url", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get wheelchair_boarding(): GTFS_Wheelchair_Boarding | undefined {
    return super.get("wheelchair_boarding");
  }
  set wheelchair_boarding(value: GTFS_Wheelchair_Boarding | undefined) {
    super.set("wheelchair_boarding", value);
  }

  get zone_id(): string | undefined {
    return super.get("zone_id");
  }
  set zone_id(value: string | undefined) {
    super.set("zone_id", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Stop", GTFS_Stop);

