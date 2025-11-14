import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface PermissionAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  adminOnly?: boolean | undefined;
  description?: string | undefined;
  key: string;
  label?: string | undefined;
  tenant?: Tenant | undefined;
}

export class Permission extends Parse.Object<PermissionAttributes> {
  static className: string = "OD3_Permission";

  constructor(data?: Partial<PermissionAttributes>) {
    super("OD3_Permission", data as PermissionAttributes);
  }

  get adminOnly(): boolean | undefined {
    return super.get("adminOnly");
  }
  set adminOnly(value: boolean | undefined) {
    super.set("adminOnly", value);
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

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Permission", Permission);

