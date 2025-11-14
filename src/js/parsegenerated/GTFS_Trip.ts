import Parse from "parse";

import type { GTFS_Bikes_Allowed } from "./GTFS_Bikes_Allowed";
import type { GTFS_Direction } from "./GTFS_Direction";
import type { GTFS_Route } from "./GTFS_Route";
import type { GTFS_Calendar } from "./GTFS_Calendar";
import type { Tenant } from "./Tenant";
import type { GTFS_Wheelchair_Accessible } from "./GTFS_Wheelchair_Accessible";

export interface GTFS_TripAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  bikes_allowed?: GTFS_Bikes_Allowed | undefined;
  direction_id?: GTFS_Direction | undefined;
  key: string;
  route_id: GTFS_Route;
  service_id: GTFS_Calendar;
  tenant: Tenant;
  trip_headsign?: string | undefined;
  trip_short_name?: string | undefined;
  wheelchair_accessible?: GTFS_Wheelchair_Accessible | undefined;
}

export class GTFS_Trip extends Parse.Object<GTFS_TripAttributes> {
  static className: string = "OD3_GTFS_Trip";

  constructor(data?: Partial<GTFS_TripAttributes>) {
    super("OD3_GTFS_Trip", data as GTFS_TripAttributes);
  }

  get bikes_allowed(): GTFS_Bikes_Allowed | undefined {
    return super.get("bikes_allowed");
  }
  set bikes_allowed(value: GTFS_Bikes_Allowed | undefined) {
    super.set("bikes_allowed", value);
  }

  get direction_id(): GTFS_Direction | undefined {
    return super.get("direction_id");
  }
  set direction_id(value: GTFS_Direction | undefined) {
    super.set("direction_id", value);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get route_id(): GTFS_Route {
    return super.get("route_id");
  }
  set route_id(value: GTFS_Route) {
    super.set("route_id", value);
  }

  get service_id(): GTFS_Calendar {
    return super.get("service_id");
  }
  set service_id(value: GTFS_Calendar) {
    super.set("service_id", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get trip_headsign(): string | undefined {
    return super.get("trip_headsign");
  }
  set trip_headsign(value: string | undefined) {
    super.set("trip_headsign", value);
  }

  get trip_short_name(): string | undefined {
    return super.get("trip_short_name");
  }
  set trip_short_name(value: string | undefined) {
    super.set("trip_short_name", value);
  }

  get wheelchair_accessible(): GTFS_Wheelchair_Accessible | undefined {
    return super.get("wheelchair_accessible");
  }
  set wheelchair_accessible(value: GTFS_Wheelchair_Accessible | undefined) {
    super.set("wheelchair_accessible", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Trip", GTFS_Trip);

