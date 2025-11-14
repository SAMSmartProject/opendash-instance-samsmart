import Parse from "parse";

import type { Maintenance_Project } from "./Maintenance_Project";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_ProjectAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  project?: Maintenance_Project | undefined;
  tenant?: Tenant | undefined;
  ticket?: Maintenance_Ticket | undefined;
  user?: _User | undefined;
}

export class Maintenance_Ticket_Project extends Parse.Object<Maintenance_Ticket_ProjectAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Project";

  constructor(data?: Partial<Maintenance_Ticket_ProjectAttributes>) {
    super("OD3_Maintenance_Ticket_Project", data as Maintenance_Ticket_ProjectAttributes);
  }

  get project(): Maintenance_Project | undefined {
    return super.get("project");
  }
  set project(value: Maintenance_Project | undefined) {
    super.set("project", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get ticket(): Maintenance_Ticket | undefined {
    return super.get("ticket");
  }
  set ticket(value: Maintenance_Ticket | undefined) {
    super.set("ticket", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Project", Maintenance_Ticket_Project);

