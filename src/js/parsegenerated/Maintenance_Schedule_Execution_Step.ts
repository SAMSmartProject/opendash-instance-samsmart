import Parse from "parse";

import type { Maintenance_Media } from "./Maintenance_Media";
import type { _Role } from "./_Role";
import type { Maintenance_Schedule_Execution } from "./Maintenance_Schedule_Execution";
import type { Maintenance_Schedule_Step } from "./Maintenance_Schedule_Step";
import type { Tenant } from "./Tenant";

export interface Maintenance_Schedule_Execution_StepAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  comment?: string | undefined;
  description?: string | undefined;
  done: boolean;
  fields: any[];
  media: Parse.Relation<Maintenance_Schedule_Execution_Step, Maintenance_Media>;
  meta: any[];
  order: number;
  roles: Parse.Relation<Maintenance_Schedule_Execution_Step, _Role>;
  scheduleexecution?: Maintenance_Schedule_Execution | undefined;
  step?: Maintenance_Schedule_Step | undefined;
  tenant: Tenant;
  title?: string | undefined;
}

export class Maintenance_Schedule_Execution_Step extends Parse.Object<Maintenance_Schedule_Execution_StepAttributes> {
  static className: string = "OD3_Maintenance_Schedule_Execution_Step";

  constructor(data?: Partial<Maintenance_Schedule_Execution_StepAttributes>) {
    super("OD3_Maintenance_Schedule_Execution_Step", data as Maintenance_Schedule_Execution_StepAttributes);
  }

  get comment(): string | undefined {
    return super.get("comment");
  }
  set comment(value: string | undefined) {
    super.set("comment", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get done(): boolean {
    return super.get("done");
  }
  set done(value: boolean) {
    super.set("done", value);
  }

  get fields(): any[] {
    return super.get("fields");
  }
  set fields(value: any[]) {
    super.set("fields", value);
  }

  get media(): Parse.Relation<Maintenance_Schedule_Execution_Step, Maintenance_Media> {
    return super.relation("media");
  }

  get meta(): any[] {
    return super.get("meta");
  }
  set meta(value: any[]) {
    super.set("meta", value);
  }

  get order(): number {
    return super.get("order");
  }
  set order(value: number) {
    super.set("order", value);
  }

  get roles(): Parse.Relation<Maintenance_Schedule_Execution_Step, _Role> {
    return super.relation("roles");
  }

  get scheduleexecution(): Maintenance_Schedule_Execution | undefined {
    return super.get("scheduleexecution");
  }
  set scheduleexecution(value: Maintenance_Schedule_Execution | undefined) {
    super.set("scheduleexecution", value);
  }

  get step(): Maintenance_Schedule_Step | undefined {
    return super.get("step");
  }
  set step(value: Maintenance_Schedule_Step | undefined) {
    super.set("step", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get title(): string | undefined {
    return super.get("title");
  }
  set title(value: string | undefined) {
    super.set("title", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Schedule_Execution_Step", Maintenance_Schedule_Execution_Step);

