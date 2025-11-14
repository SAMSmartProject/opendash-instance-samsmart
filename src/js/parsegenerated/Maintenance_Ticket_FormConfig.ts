import Parse from "parse";

import type { _Role } from "./_Role";
import type { Tenant } from "./Tenant";

export interface Maintenance_Ticket_FormConfigAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  config: any;
  roles: Parse.Relation<Maintenance_Ticket_FormConfig, _Role>;
  tenant?: Tenant | undefined;
  view: string;
}

export class Maintenance_Ticket_FormConfig extends Parse.Object<Maintenance_Ticket_FormConfigAttributes> {
  static className: string = "OD3_Maintenance_Ticket_FormConfig";

  constructor(data?: Partial<Maintenance_Ticket_FormConfigAttributes>) {
    super("OD3_Maintenance_Ticket_FormConfig", data as Maintenance_Ticket_FormConfigAttributes);
  }

  get config(): any {
    return super.get("config");
  }
  set config(value: any) {
    super.set("config", value);
  }

  get roles(): Parse.Relation<Maintenance_Ticket_FormConfig, _Role> {
    return super.relation("roles");
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get view(): string {
    return super.get("view");
  }
  set view(value: string) {
    super.set("view", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Ticket_FormConfig", Maintenance_Ticket_FormConfig);

