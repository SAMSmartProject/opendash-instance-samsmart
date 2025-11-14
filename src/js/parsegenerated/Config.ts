import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface ConfigAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  key: string;
  priority: number;
  tenant?: Tenant | undefined;
  value: string;
}

export class Config extends Parse.Object<ConfigAttributes> {
  static className: string = "OD3_Config";

  constructor(data?: Partial<ConfigAttributes>) {
    super("OD3_Config", data as ConfigAttributes);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get priority(): number {
    return super.get("priority");
  }
  set priority(value: number) {
    super.set("priority", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get value(): string {
    return super.get("value");
  }
  set value(value: string) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_Config", Config);

