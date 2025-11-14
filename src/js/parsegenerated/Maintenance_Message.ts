import Parse from "parse";

import type { Maintenance_Media } from "./Maintenance_Media";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Maintenance_MessageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  classname: string;
  content?: string | undefined;
  data?: any | undefined;
  displayAt?: Date | undefined;
  media: Parse.Relation<Maintenance_Message, Maintenance_Media>;
  referencedObjectId: string;
  tenant?: Tenant | undefined;
  title?: string | undefined;
  user?: _User | undefined;
}

export class Maintenance_Message extends Parse.Object<Maintenance_MessageAttributes> {
  static className: string = "OD3_Maintenance_Message";

  constructor(data?: Partial<Maintenance_MessageAttributes>) {
    super("OD3_Maintenance_Message", data as Maintenance_MessageAttributes);
  }

  get classname(): string {
    return super.get("classname");
  }
  set classname(value: string) {
    super.set("classname", value);
  }

  get content(): string | undefined {
    return super.get("content");
  }
  set content(value: string | undefined) {
    super.set("content", value);
  }

  get data(): any | undefined {
    return super.get("data");
  }
  set data(value: any | undefined) {
    super.set("data", value);
  }

  get displayAt(): Date | undefined {
    return super.get("displayAt");
  }
  set displayAt(value: Date | undefined) {
    super.set("displayAt", value);
  }

  get media(): Parse.Relation<Maintenance_Message, Maintenance_Media> {
    return super.relation("media");
  }

  get referencedObjectId(): string {
    return super.get("referencedObjectId");
  }
  set referencedObjectId(value: string) {
    super.set("referencedObjectId", value);
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

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Message", Maintenance_Message);

