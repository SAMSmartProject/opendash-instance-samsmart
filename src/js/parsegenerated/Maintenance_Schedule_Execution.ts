import Parse from "parse";

import type { Maintenance_Media } from "./Maintenance_Media";
import type { Maintenance_Schedule_Template } from "./Maintenance_Schedule_Template";
import type { Maintenance_Schedule } from "./Maintenance_Schedule";
import type { Source } from "./Source";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Maintenance_Schedule_ExecutionAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  finishedAt?: Date | undefined;
  material?: any[] | undefined;
  media: Parse.Relation<Maintenance_Schedule_Execution, Maintenance_Media>;
  origin?: Maintenance_Schedule_Template | undefined;
  origin_cron?: any | undefined;
  schedule?: Maintenance_Schedule | undefined;
  source?: Source | undefined;
  status: string;
  tenant?: Tenant | undefined;
  title?: string | undefined;
  user: _User;
}

export class Maintenance_Schedule_Execution extends Parse.Object<Maintenance_Schedule_ExecutionAttributes> {
  static className: string = "OD3_Maintenance_Schedule_Execution";

  constructor(data?: Partial<Maintenance_Schedule_ExecutionAttributes>) {
    super("OD3_Maintenance_Schedule_Execution", data as Maintenance_Schedule_ExecutionAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get finishedAt(): Date | undefined {
    return super.get("finishedAt");
  }
  set finishedAt(value: Date | undefined) {
    super.set("finishedAt", value);
  }

  get material(): any[] | undefined {
    return super.get("material");
  }
  set material(value: any[] | undefined) {
    super.set("material", value);
  }

  get media(): Parse.Relation<Maintenance_Schedule_Execution, Maintenance_Media> {
    return super.relation("media");
  }

  get origin(): Maintenance_Schedule_Template | undefined {
    return super.get("origin");
  }
  set origin(value: Maintenance_Schedule_Template | undefined) {
    super.set("origin", value);
  }

  get origin_cron(): any | undefined {
    return super.get("origin_cron");
  }
  set origin_cron(value: any | undefined) {
    super.set("origin_cron", value);
  }

  get schedule(): Maintenance_Schedule | undefined {
    return super.get("schedule");
  }
  set schedule(value: Maintenance_Schedule | undefined) {
    super.set("schedule", value);
  }

  get source(): Source | undefined {
    return super.get("source");
  }
  set source(value: Source | undefined) {
    super.set("source", value);
  }

  get status(): string {
    return super.get("status");
  }
  set status(value: string) {
    super.set("status", value);
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

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Schedule_Execution", Maintenance_Schedule_Execution);

