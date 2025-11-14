import Parse from "parse";

import type { _Role } from "./_Role";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Notification_SettingAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  key: string;
  label?: string | undefined;
  roles: Parse.Relation<Notification_Setting, _Role>;
  tenant?: Tenant | undefined;
  users: Parse.Relation<Notification_Setting, _User>;
}

export class Notification_Setting extends Parse.Object<Notification_SettingAttributes> {
  static className: string = "OD3_Notification_Setting";

  constructor(data?: Partial<Notification_SettingAttributes>) {
    super("OD3_Notification_Setting", data as Notification_SettingAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get label(): string | undefined {
    return super.get("label");
  }
  set label(value: string | undefined) {
    super.set("label", value);
  }

  get roles(): Parse.Relation<Notification_Setting, _Role> {
    return super.relation("roles");
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get users(): Parse.Relation<Notification_Setting, _User> {
    return super.relation("users");
  }
}

Parse.Object.registerSubclass("OD3_Notification_Setting", Notification_Setting);

