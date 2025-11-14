import Parse from "parse";

import type { Maintenance_Media } from "./Maintenance_Media";
import type { _Role } from "./_Role";
import type { Tenant } from "./Tenant";

export interface Maintenance_Schedule_StepAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  fields?: any[] | undefined;
  media: Parse.Relation<Maintenance_Schedule_Step, Maintenance_Media>;
  order: number;
  roles: Parse.Relation<Maintenance_Schedule_Step, _Role>;
  tenant?: Tenant | undefined;
  title?: string | undefined;
}

export class Maintenance_Schedule_Step extends Parse.Object<Maintenance_Schedule_StepAttributes> {
  static className: string = "OD3_Maintenance_Schedule_Step";

  constructor(data?: Partial<Maintenance_Schedule_StepAttributes>) {
    super("OD3_Maintenance_Schedule_Step", data as Maintenance_Schedule_StepAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get fields(): any[] | undefined {
    return super.get("fields");
  }
  set fields(value: any[] | undefined) {
    super.set("fields", value);
  }

  get media(): Parse.Relation<Maintenance_Schedule_Step, Maintenance_Media> {
    return super.relation("media");
  }

  get order(): number {
    return super.get("order");
  }
  set order(value: number) {
    super.set("order", value);
  }

  get roles(): Parse.Relation<Maintenance_Schedule_Step, _Role> {
    return super.relation("roles");
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
}

Parse.Object.registerSubclass("OD3_Maintenance_Schedule_Step", Maintenance_Schedule_Step);

