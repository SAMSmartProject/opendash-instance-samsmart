import Parse from "parse";

import type { _Role } from "./_Role";
import type { _User } from "./_User";
import type { Maintenance_Project } from "./Maintenance_Project";
import type { Tenant } from "./Tenant";

export interface Maintenance_TicketAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  assignedroles: Parse.Relation<Maintenance_Ticket, _Role>;
  assignedusers: Parse.Relation<Maintenance_Ticket, _User>;
  description?: string | undefined;
  enabled: boolean;
  latestPriorityValue?: number | undefined;
  meta?: any | undefined;
  project?: Maintenance_Project | undefined;
  tenant?: Tenant | undefined;
  title?: string | undefined;
  user?: _User | undefined;
}

export class Maintenance_Ticket extends Parse.Object<Maintenance_TicketAttributes> {
  static className: string = "OD3_Maintenance_Ticket";

  constructor(data?: Partial<Maintenance_TicketAttributes>) {
    super("OD3_Maintenance_Ticket", data as Maintenance_TicketAttributes);
  }

  get assignedroles(): Parse.Relation<Maintenance_Ticket, _Role> {
    return super.relation("assignedroles");
  }

  get assignedusers(): Parse.Relation<Maintenance_Ticket, _User> {
    return super.relation("assignedusers");
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get latestPriorityValue(): number | undefined {
    return super.get("latestPriorityValue");
  }
  set latestPriorityValue(value: number | undefined) {
    super.set("latestPriorityValue", value);
  }

  get meta(): any | undefined {
    return super.get("meta");
  }
  set meta(value: any | undefined) {
    super.set("meta", value);
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

  get title(): string | undefined {
    return super.get("title");
  }
  set title(value: string | undefined) {
    super.set("title", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket", Maintenance_Ticket);

