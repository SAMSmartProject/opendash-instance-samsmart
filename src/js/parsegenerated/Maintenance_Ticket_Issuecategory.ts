import Parse from "parse";

import type { Maintenance_Issuecategory } from "./Maintenance_Issuecategory";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_IssuecategoryAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  issuecategory: Maintenance_Issuecategory;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
}

export class Maintenance_Ticket_Issuecategory extends Parse.Object<Maintenance_Ticket_IssuecategoryAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Issuecategory";

  constructor(data?: Partial<Maintenance_Ticket_IssuecategoryAttributes>) {
    super("OD3_Maintenance_Ticket_Issuecategory", data as Maintenance_Ticket_IssuecategoryAttributes);
  }

  get issuecategory(): Maintenance_Issuecategory {
    return super.get("issuecategory");
  }
  set issuecategory(value: Maintenance_Issuecategory) {
    super.set("issuecategory", value);
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

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Issuecategory", Maintenance_Ticket_Issuecategory);

