import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Maintenance_Ticket_QR_CodeAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  code: string;
  name?: string | undefined;
  tenant?: Tenant | undefined;
  user?: _User | undefined;
}

export class Maintenance_Ticket_QR_Code extends Parse.Object<Maintenance_Ticket_QR_CodeAttributes> {
  static className: string = "OD3_Maintenance_Ticket_QR_Code";

  constructor(data?: Partial<Maintenance_Ticket_QR_CodeAttributes>) {
    super("OD3_Maintenance_Ticket_QR_Code", data as Maintenance_Ticket_QR_CodeAttributes);
  }

  get code(): string {
    return super.get("code");
  }
  set code(value: string) {
    super.set("code", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_QR_Code", Maintenance_Ticket_QR_Code);

