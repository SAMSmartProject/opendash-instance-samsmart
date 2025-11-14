import Parse from "parse";

import type { Maintenance_Kanban_State } from "./Maintenance_Kanban_State";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_Kanban_StateAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  state: Maintenance_Kanban_State;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
}

export class Maintenance_Ticket_Kanban_State extends Parse.Object<Maintenance_Ticket_Kanban_StateAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Kanban_State";

  constructor(data?: Partial<Maintenance_Ticket_Kanban_StateAttributes>) {
    super("OD3_Maintenance_Ticket_Kanban_State", data as Maintenance_Ticket_Kanban_StateAttributes);
  }

  get state(): Maintenance_Kanban_State {
    return super.get("state");
  }
  set state(value: Maintenance_Kanban_State) {
    super.set("state", value);
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

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Kanban_State", Maintenance_Ticket_Kanban_State);

