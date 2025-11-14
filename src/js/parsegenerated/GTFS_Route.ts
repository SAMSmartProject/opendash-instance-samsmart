import Parse from "parse";

import type { GTFS_Agency } from "./GTFS_Agency";
import type { Tenant } from "./Tenant";

export interface GTFS_RouteAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  agency_id: GTFS_Agency;
  key: string;
  route_color?: string | undefined;
  route_desc?: string | undefined;
  route_id: string;
  route_long_name?: string | undefined;
  route_short_name?: string | undefined;
  route_sort_order?: number | undefined;
  route_text_color?: string | undefined;
  route_type: number;
  route_url?: string | undefined;
  tenant: Tenant;
}

export class GTFS_Route extends Parse.Object<GTFS_RouteAttributes> {
  static className: string = "OD3_GTFS_Route";

  constructor(data?: Partial<GTFS_RouteAttributes>) {
    super("OD3_GTFS_Route", data as GTFS_RouteAttributes);
  }

  get agency_id(): GTFS_Agency {
    return super.get("agency_id");
  }
  set agency_id(value: GTFS_Agency) {
    super.set("agency_id", value);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get route_color(): string | undefined {
    return super.get("route_color");
  }
  set route_color(value: string | undefined) {
    super.set("route_color", value);
  }

  get route_desc(): string | undefined {
    return super.get("route_desc");
  }
  set route_desc(value: string | undefined) {
    super.set("route_desc", value);
  }

  get route_id(): string {
    return super.get("route_id");
  }
  set route_id(value: string) {
    super.set("route_id", value);
  }

  get route_long_name(): string | undefined {
    return super.get("route_long_name");
  }
  set route_long_name(value: string | undefined) {
    super.set("route_long_name", value);
  }

  get route_short_name(): string | undefined {
    return super.get("route_short_name");
  }
  set route_short_name(value: string | undefined) {
    super.set("route_short_name", value);
  }

  get route_sort_order(): number | undefined {
    return super.get("route_sort_order");
  }
  set route_sort_order(value: number | undefined) {
    super.set("route_sort_order", value);
  }

  get route_text_color(): string | undefined {
    return super.get("route_text_color");
  }
  set route_text_color(value: string | undefined) {
    super.set("route_text_color", value);
  }

  get route_type(): number {
    return super.get("route_type");
  }
  set route_type(value: number) {
    super.set("route_type", value);
  }

  get route_url(): string | undefined {
    return super.get("route_url");
  }
  set route_url(value: string | undefined) {
    super.set("route_url", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Route", GTFS_Route);

