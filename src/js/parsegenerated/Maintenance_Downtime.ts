import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_DowntimeAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
  value: number;
}

export class Maintenance_Downtime extends Parse.Object<Maintenance_DowntimeAttributes> {
  static className: string = "OD3_Maintenance_Downtime";

  constructor(data?: Partial<Maintenance_DowntimeAttributes>) {
    super("OD3_Maintenance_Downtime", data as Maintenance_DowntimeAttributes);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get ticket(): Maintenance_Ticket {
    return super.get("ticket");
  }
  set ticket(value: Maintenance_Ticket) {
    super.set("ticket", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }

  get value(): number {
    return super.get("value");
  }
  set value(value: number) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Downtime", Maintenance_Downtime);

