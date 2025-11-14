import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_SourceAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  source: Source;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
}

export class Maintenance_Ticket_Source extends Parse.Object<Maintenance_Ticket_SourceAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Source";

  constructor(data?: Partial<Maintenance_Ticket_SourceAttributes>) {
    super("OD3_Maintenance_Ticket_Source", data as Maintenance_Ticket_SourceAttributes);
  }

  get source(): Source {
    return super.get("source");
  }
  set source(value: Source) {
    super.set("source", value);
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

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Source", Maintenance_Ticket_Source);

