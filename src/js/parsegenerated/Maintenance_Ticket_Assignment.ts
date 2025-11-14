import Parse from "parse";

import type { _Role } from "./_Role";
import type { _User } from "./_User";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";

export interface Maintenance_Ticket_AssignmentAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  assignedRole?: _Role | undefined;
  assignedUser?: _User | undefined;
  batchStamp: Date;
  tenant?: Tenant | undefined;
  ticket?: Maintenance_Ticket | undefined;
  user: _User;
}

export class Maintenance_Ticket_Assignment extends Parse.Object<Maintenance_Ticket_AssignmentAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Assignment";

  constructor(data?: Partial<Maintenance_Ticket_AssignmentAttributes>) {
    super("OD3_Maintenance_Ticket_Assignment", data as Maintenance_Ticket_AssignmentAttributes);
  }

  get assignedRole(): _Role | undefined {
    return super.get("assignedRole");
  }
  set assignedRole(value: _Role | undefined) {
    super.set("assignedRole", value);
  }

  get assignedUser(): _User | undefined {
    return super.get("assignedUser");
  }
  set assignedUser(value: _User | undefined) {
    super.set("assignedUser", value);
  }

  get batchStamp(): Date {
    return super.get("batchStamp");
  }
  set batchStamp(value: Date) {
    super.set("batchStamp", value);
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

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Assignment", Maintenance_Ticket_Assignment);

