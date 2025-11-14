import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Documentation_CategoryAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  icon?: string | undefined;
  name: string;
  order: number;
  parent?: Documentation_Category | undefined;
  tenant?: Tenant | undefined;
  user?: _User | undefined;
}

export class Documentation_Category extends Parse.Object<Documentation_CategoryAttributes> {
  static className: string = "OD3_Documentation_Category";

  constructor(data?: Partial<Documentation_CategoryAttributes>) {
    super("OD3_Documentation_Category", data as Documentation_CategoryAttributes);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get order(): number {
    return super.get("order");
  }
  set order(value: number) {
    super.set("order", value);
  }

  get parent(): Documentation_Category | undefined {
    return super.get("parent");
  }
  set parent(value: Documentation_Category | undefined) {
    super.set("parent", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Documentation_Category", Documentation_Category);

