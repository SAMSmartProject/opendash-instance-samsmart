import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface NavigationGroupAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  icon?: string | undefined;
  label: string;
  order: number;
  tenant?: Tenant | undefined;
}

export class NavigationGroup extends Parse.Object<NavigationGroupAttributes> {
  static className: string = "OD3_NavigationGroup";

  constructor(data?: Partial<NavigationGroupAttributes>) {
    super("OD3_NavigationGroup", data as NavigationGroupAttributes);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get order(): number {
    return super.get("order");
  }
  set order(value: number) {
    super.set("order", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_NavigationGroup", NavigationGroup);

