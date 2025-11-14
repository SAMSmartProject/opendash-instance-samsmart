import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_AgencyAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  agency_email?: string | undefined;
  agency_fare_url?: string | undefined;
  agency_id: string;
  agency_lang?: string | undefined;
  agency_name: string;
  agency_phone?: string | undefined;
  agency_timezone: string;
  agency_url: string;
  tenant: Tenant;
}

export class GTFS_Agency extends Parse.Object<GTFS_AgencyAttributes> {
  static className: string = "OD3_GTFS_Agency";

  constructor(data?: Partial<GTFS_AgencyAttributes>) {
    super("OD3_GTFS_Agency", data as GTFS_AgencyAttributes);
  }

  get agency_email(): string | undefined {
    return super.get("agency_email");
  }
  set agency_email(value: string | undefined) {
    super.set("agency_email", value);
  }

  get agency_fare_url(): string | undefined {
    return super.get("agency_fare_url");
  }
  set agency_fare_url(value: string | undefined) {
    super.set("agency_fare_url", value);
  }

  get agency_id(): string {
    return super.get("agency_id");
  }
  set agency_id(value: string) {
    super.set("agency_id", value);
  }

  get agency_lang(): string | undefined {
    return super.get("agency_lang");
  }
  set agency_lang(value: string | undefined) {
    super.set("agency_lang", value);
  }

  get agency_name(): string {
    return super.get("agency_name");
  }
  set agency_name(value: string) {
    super.set("agency_name", value);
  }

  get agency_phone(): string | undefined {
    return super.get("agency_phone");
  }
  set agency_phone(value: string | undefined) {
    super.set("agency_phone", value);
  }

  get agency_timezone(): string {
    return super.get("agency_timezone");
  }
  set agency_timezone(value: string) {
    super.set("agency_timezone", value);
  }

  get agency_url(): string {
    return super.get("agency_url");
  }
  set agency_url(value: string) {
    super.set("agency_url", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Agency", GTFS_Agency);

