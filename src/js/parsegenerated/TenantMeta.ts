import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface TenantMetaAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  tenant: Tenant;
}

export class TenantMeta extends Parse.Object<TenantMetaAttributes> {
  static className: string = "OD3_TenantMeta";

  constructor(data?: Partial<TenantMetaAttributes>) {
    super("OD3_TenantMeta", data as TenantMetaAttributes);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_TenantMeta", TenantMeta);

