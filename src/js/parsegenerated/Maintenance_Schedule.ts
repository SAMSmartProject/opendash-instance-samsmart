import Parse from "parse";

import type { Contact } from "./Contact";
import type { Maintenance_Schedule_Execution } from "./Maintenance_Schedule_Execution";
import type { Source } from "./Source";
import type { Maintenance_Schedule_Step } from "./Maintenance_Schedule_Step";
import type { Maintenance_Schedule_Template } from "./Maintenance_Schedule_Template";
import type { Tenant } from "./Tenant";

export interface Maintenance_ScheduleAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  color?: string | undefined;
  contacts: Parse.Relation<Maintenance_Schedule, Contact>;
  cron?: any | undefined;
  description?: string | undefined;
  enabled: boolean;
  lastExecution?: Maintenance_Schedule_Execution | undefined;
  notifyBeforeDue?: any | undefined;
  source: Source;
  steps: Parse.Relation<Maintenance_Schedule, Maintenance_Schedule_Step>;
  template?: Maintenance_Schedule_Template | undefined;
  tenant?: Tenant | undefined;
  title?: string | undefined;
}

export class Maintenance_Schedule extends Parse.Object<Maintenance_ScheduleAttributes> {
  static className: string = "OD3_Maintenance_Schedule";

  constructor(data?: Partial<Maintenance_ScheduleAttributes>) {
    super("OD3_Maintenance_Schedule", data as Maintenance_ScheduleAttributes);
  }

  get color(): string | undefined {
    return super.get("color");
  }
  set color(value: string | undefined) {
    super.set("color", value);
  }

  get contacts(): Parse.Relation<Maintenance_Schedule, Contact> {
    return super.relation("contacts");
  }

  get cron(): any | undefined {
    return super.get("cron");
  }
  set cron(value: any | undefined) {
    super.set("cron", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get lastExecution(): Maintenance_Schedule_Execution | undefined {
    return super.get("lastExecution");
  }
  set lastExecution(value: Maintenance_Schedule_Execution | undefined) {
    super.set("lastExecution", value);
  }

  get notifyBeforeDue(): any | undefined {
    return super.get("notifyBeforeDue");
  }
  set notifyBeforeDue(value: any | undefined) {
    super.set("notifyBeforeDue", value);
  }

  get source(): Source {
    return super.get("source");
  }
  set source(value: Source) {
    super.set("source", value);
  }

  get steps(): Parse.Relation<Maintenance_Schedule, Maintenance_Schedule_Step> {
    return super.relation("steps");
  }

  get template(): Maintenance_Schedule_Template | undefined {
    return super.get("template");
  }
  set template(value: Maintenance_Schedule_Template | undefined) {
    super.set("template", value);
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

Parse.Object.registerSubclass("OD3_Maintenance_Schedule", Maintenance_Schedule);

