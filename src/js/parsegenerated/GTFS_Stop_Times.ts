import Parse from "parse";

import type { GTFS_Stop } from "./GTFS_Stop";
import type { Tenant } from "./Tenant";
import type { GTFS_Trip } from "./GTFS_Trip";

export interface GTFS_Stop_TimesAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  arrival_time?: Date | undefined;
  departure_time?: Date | undefined;
  stop_id: GTFS_Stop;
  stop_sequence: number;
  tenant: Tenant;
  trip_id: GTFS_Trip;
}

export class GTFS_Stop_Times extends Parse.Object<GTFS_Stop_TimesAttributes> {
  static className: string = "OD3_GTFS_Stop_Times";

  constructor(data?: Partial<GTFS_Stop_TimesAttributes>) {
    super("OD3_GTFS_Stop_Times", data as GTFS_Stop_TimesAttributes);
  }

  get arrival_time(): Date | undefined {
    return super.get("arrival_time");
  }
  set arrival_time(value: Date | undefined) {
    super.set("arrival_time", value);
  }

  get departure_time(): Date | undefined {
    return super.get("departure_time");
  }
  set departure_time(value: Date | undefined) {
    super.set("departure_time", value);
  }

  get stop_id(): GTFS_Stop {
    return super.get("stop_id");
  }
  set stop_id(value: GTFS_Stop) {
    super.set("stop_id", value);
  }

  get stop_sequence(): number {
    return super.get("stop_sequence");
  }
  set stop_sequence(value: number) {
    super.set("stop_sequence", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get trip_id(): GTFS_Trip {
    return super.get("trip_id");
  }
  set trip_id(value: GTFS_Trip) {
    super.set("trip_id", value);
  }
}

Parse.Object.registerSubclass("OD3_GTFS_Stop_Times", GTFS_Stop_Times);

