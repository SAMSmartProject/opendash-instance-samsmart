import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_DuedateAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  end: Date;
  endformat: string;
  start?: Date | undefined;
  startformat: string;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
}

export class Maintenance_Duedate extends Parse.Object<Maintenance_DuedateAttributes> {
  static className: string = "OD3_Maintenance_Duedate";

  constructor(data?: Partial<Maintenance_DuedateAttributes>) {
    super("OD3_Maintenance_Duedate", data as Maintenance_DuedateAttributes);
  }

  get end(): Date {
    return super.get("end");
  }
  set end(value: Date) {
    super.set("end", value);
  }

  get endformat(): string {
    return super.get("endformat");
  }
  set endformat(value: string) {
    super.set("endformat", value);
  }

  get start(): Date | undefined {
    return super.get("start");
  }
  set start(value: Date | undefined) {
    super.set("start", value);
  }

  get startformat(): string {
    return super.get("startformat");
  }
  set startformat(value: string) {
    super.set("startformat", value);
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
}

Parse.Object.registerSubclass("OD3_Maintenance_Duedate", Maintenance_Duedate);

