import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface AssetsAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  context?: string | undefined;
  description: string;
  file: Parse.File;
  meta?: any | undefined;
  tenant?: Tenant | undefined;
  user: _User;
}

export class Assets extends Parse.Object<AssetsAttributes> {
  static className: string = "OD3_Assets";

  constructor(data?: Partial<AssetsAttributes>) {
    super("OD3_Assets", data as AssetsAttributes);
  }

  get context(): string | undefined {
    return super.get("context");
  }
  set context(value: string | undefined) {
    super.set("context", value);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get file(): Parse.File {
    return super.get("file");
  }
  set file(value: Parse.File) {
    super.set("file", value);
  }

  get meta(): any | undefined {
    return super.get("meta");
  }
  set meta(value: any | undefined) {
    super.set("meta", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Assets", Assets);

