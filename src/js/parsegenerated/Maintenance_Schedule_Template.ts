import Parse from "parse";

import type { Contact } from "./Contact";
import type { Source } from "./Source";
import type { Maintenance_Schedule_Step } from "./Maintenance_Schedule_Step";
import type { Tenant } from "./Tenant";

export interface Maintenance_Schedule_TemplateAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  color?: string | undefined;
  contacts: Parse.Relation<Maintenance_Schedule_Template, Contact>;
  cron?: any | undefined;
  description?: string | undefined;
  enabled: boolean;
  notifyBeforeDue: any;
  sources: Parse.Relation<Maintenance_Schedule_Template, Source>;
  steps: Parse.Relation<Maintenance_Schedule_Template, Maintenance_Schedule_Step>;
  tenant?: Tenant | undefined;
  title?: string | undefined;
}

export class Maintenance_Schedule_Template extends Parse.Object<Maintenance_Schedule_TemplateAttributes> {
  static className: string = "OD3_Maintenance_Schedule_Template";

  constructor(data?: Partial<Maintenance_Schedule_TemplateAttributes>) {
    super("OD3_Maintenance_Schedule_Template", data as Maintenance_Schedule_TemplateAttributes);
  }

  get color(): string | undefined {
    return super.get("color");
  }
  set color(value: string | undefined) {
    super.set("color", value);
  }

  get contacts(): Parse.Relation<Maintenance_Schedule_Template, Contact> {
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

  get notifyBeforeDue(): any {
    return super.get("notifyBeforeDue");
  }
  set notifyBeforeDue(value: any) {
    super.set("notifyBeforeDue", value);
  }

  get sources(): Parse.Relation<Maintenance_Schedule_Template, Source> {
    return super.relation("sources");
  }

  get steps(): Parse.Relation<Maintenance_Schedule_Template, Maintenance_Schedule_Step> {
    return super.relation("steps");
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

Parse.Object.registerSubclass("OD3_Maintenance_Schedule_Template", Maintenance_Schedule_Template);

