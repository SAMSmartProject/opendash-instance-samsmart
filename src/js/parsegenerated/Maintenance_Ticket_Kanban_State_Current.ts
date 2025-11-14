import Parse from "parse";

import type { Maintenance_Kanban_State } from "./Maintenance_Kanban_State";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { Maintenance_Ticket_Kanban_State } from "./Maintenance_Ticket_Kanban_State";

export interface Maintenance_Ticket_Kanban_State_CurrentAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  state?: Maintenance_Kanban_State | undefined;
  tenant?: Tenant | undefined;
  ticket?: Maintenance_Ticket | undefined;
  ticketState?: Maintenance_Ticket_Kanban_State | undefined;
}

export class Maintenance_Ticket_Kanban_State_Current extends Parse.Object<Maintenance_Ticket_Kanban_State_CurrentAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Kanban_State_Current";

  constructor(data?: Partial<Maintenance_Ticket_Kanban_State_CurrentAttributes>) {
    super("OD3_Maintenance_Ticket_Kanban_State_Current", data as Maintenance_Ticket_Kanban_State_CurrentAttributes);
  }

  get state(): Maintenance_Kanban_State | undefined {
    return super.get("state");
  }
  set state(value: Maintenance_Kanban_State | undefined) {
    super.set("state", value);
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

  get ticketState(): Maintenance_Ticket_Kanban_State | undefined {
    return super.get("ticketState");
  }
  set ticketState(value: Maintenance_Ticket_Kanban_State | undefined) {
    super.set("ticketState", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Kanban_State_Current", Maintenance_Ticket_Kanban_State_Current);

