import Parse from "parse";

import type { Maintenance_Ticket } from "./Maintenance_Ticket";
import type { _User } from "./_User";

export interface Maintenance_OrderAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  tickets: Parse.Relation<Maintenance_Order, Maintenance_Ticket>;
  title: string;
  user: _User;
}

export class Maintenance_Order extends Parse.Object<Maintenance_OrderAttributes> {
  static className: string = "OD3_Maintenance_Order";

  constructor(data?: Partial<Maintenance_OrderAttributes>) {
    super("OD3_Maintenance_Order", data as Maintenance_OrderAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get tickets(): Parse.Relation<Maintenance_Order, Maintenance_Ticket> {
    return super.relation("tickets");
  }

  get title(): string {
    return super.get("title");
  }
  set title(value: string) {
    super.set("title", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Order", Maintenance_Order);

