import Parse from "parse";

import type { Documentation_Category } from "./Documentation_Category";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Documentation_DocumentAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  category: Documentation_Category;
  content: string;
  icon?: string | undefined;
  locationPattern?: string | undefined;
  locations?: any[] | undefined;
  order: number;
  tenant?: Tenant | undefined;
  title: string;
  user?: _User | undefined;
}

export class Documentation_Document extends Parse.Object<Documentation_DocumentAttributes> {
  static className: string = "OD3_Documentation_Document";

  constructor(data?: Partial<Documentation_DocumentAttributes>) {
    super("OD3_Documentation_Document", data as Documentation_DocumentAttributes);
  }

  get category(): Documentation_Category {
    return super.get("category");
  }
  set category(value: Documentation_Category) {
    super.set("category", value);
  }

  get content(): string {
    return super.get("content");
  }
  set content(value: string) {
    super.set("content", value);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get locationPattern(): string | undefined {
    return super.get("locationPattern");
  }
  set locationPattern(value: string | undefined) {
    super.set("locationPattern", value);
  }

  get locations(): any[] | undefined {
    return super.get("locations");
  }
  set locations(value: any[] | undefined) {
    super.set("locations", value);
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

  get title(): string {
    return super.get("title");
  }
  set title(value: string) {
    super.set("title", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Documentation_Document", Documentation_Document);

