import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_MaterialAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  itemList: any[];
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  user?: _User | undefined;
}

export class Maintenance_Ticket_Material extends Parse.Object<Maintenance_Ticket_MaterialAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Material";

  constructor(data?: Partial<Maintenance_Ticket_MaterialAttributes>) {
    super("OD3_Maintenance_Ticket_Material", data as Maintenance_Ticket_MaterialAttributes);
  }

  get itemList(): any[] {
    return super.get("itemList");
  }
  set itemList(value: any[]) {
    super.set("itemList", value);
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

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Material", Maintenance_Ticket_Material);

