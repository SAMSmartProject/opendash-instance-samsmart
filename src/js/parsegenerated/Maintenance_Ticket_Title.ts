import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_Ticket_TitleAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  tenant?: Tenant | undefined;
  ticket: Maintenance_Ticket;
  title?: string | undefined;
  user: _User;
}

export class Maintenance_Ticket_Title extends Parse.Object<Maintenance_Ticket_TitleAttributes> {
  static className: string = "OD3_Maintenance_Ticket_Title";

  constructor(data?: Partial<Maintenance_Ticket_TitleAttributes>) {
    super("OD3_Maintenance_Ticket_Title", data as Maintenance_Ticket_TitleAttributes);
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

  get title(): string | undefined {
    return super.get("title");
  }
  set title(value: string | undefined) {
    super.set("title", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_Title", Maintenance_Ticket_Title);

