import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface GTFS_CalendarAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  end_date: Date;
  friday?: boolean | undefined;
  monday?: boolean | undefined;
  saturday?: boolean | undefined;
  start_date: Date;
  sunday?: boolean | undefined;
  tenant: Tenant;
  thursday?: boolean | undefined;
  tuesday?: boolean | undefined;
  wednesday?: boolean | undefined;
}

export class GTFS_Calendar extends Parse.Object<GTFS_CalendarAttributes> {
  static className: string = "OD3_GTFS_Calendar";

  constructor(data?: Partial<GTFS_CalendarAttributes>) {
    super("OD3_GTFS_Calendar", data as GTFS_CalendarAttributes);
  }

  get end_date(): Date {
    return super.get("end_date");
  }
  set end_date(value: Date) {
    super.set("end_date", value);
  }

  get friday(): boolean | undefined {
    return super.get("friday");
  }
  set friday(value: boolean | undefined) {
    super.set("friday", value);
  }

  get monday(): boolean | undefined {
    return super.get("monday");
  }
  set monday(value: boolean | undefined) {
    super.set("monday", value);
  }

  get saturday(): boolean | undefined {
    return super.get("saturday");
  }
  set saturday(value: boolean | undefined) {
    super.set("saturday", value);
  }

  get start_date(): Date {
    return super.get("start_date");
  }
  set start_date(value: Date) {
    super.set("start_date", value);
  }

  get sunday(): boolean | undefined {
    return super.get("sunday");
  }
  set sunday(value: boolean | undefined) {
    super.set("sunday", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get thursday(): boolean | undefined {
    return super.get("thursday");
  }
  set thursday(value: boolean | undefined) {
    super.set("thursday", value);
  }

  get tuesday(): boolean | undefined {
    return super.get("tuesday");
  }
  set tuesday(value: boolean | undefined) {
    super.set("tuesday", value);
  }

  get wednesday(): boolean | undefined {
    return super.get("wednesday");
  }
  set wednesday(value: boolean | undefined) {
    super.set("wednesday", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Calendar", GTFS_Calendar);

