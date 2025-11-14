import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface NavigationItemAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  activeCondition?: string | undefined;
  color?: string | undefined;
  event?: string | undefined;
  group?: string | undefined;
  icon?: string | undefined;
  label: string;
  link?: string | undefined;
  name?: string | undefined;
  order: number;
  place: string;
  routeCondition?: string | undefined;
  tenant?: Tenant | undefined;
}

export class NavigationItem extends Parse.Object<NavigationItemAttributes> {
  static className: string = "OD3_NavigationItem";

  constructor(data?: Partial<NavigationItemAttributes>) {
    super("OD3_NavigationItem", data as NavigationItemAttributes);
  }

  get activeCondition(): string | undefined {
    return super.get("activeCondition");
  }
  set activeCondition(value: string | undefined) {
    super.set("activeCondition", value);
  }

  get color(): string | undefined {
    return super.get("color");
  }
  set color(value: string | undefined) {
    super.set("color", value);
  }

  get event(): string | undefined {
    return super.get("event");
  }
  set event(value: string | undefined) {
    super.set("event", value);
  }

  get group(): string | undefined {
    return super.get("group");
  }
  set group(value: string | undefined) {
    super.set("group", value);
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

  get link(): string | undefined {
    return super.get("link");
  }
  set link(value: string | undefined) {
    super.set("link", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get order(): number {
    return super.get("order");
  }
  set order(value: number) {
    super.set("order", value);
  }

  get place(): string {
    return super.get("place");
  }
  set place(value: string) {
    super.set("place", value);
  }

  get routeCondition(): string | undefined {
    return super.get("routeCondition");
  }
  set routeCondition(value: string | undefined) {
    super.set("routeCondition", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_NavigationItem", NavigationItem);

