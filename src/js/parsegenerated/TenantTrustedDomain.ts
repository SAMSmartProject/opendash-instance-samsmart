import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface TenantTrustedDomainAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  host: string;
  tenant: Tenant;
}

export class TenantTrustedDomain extends Parse.Object<TenantTrustedDomainAttributes> {
  static className: string = "OD3_TenantTrustedDomain";

  constructor(data?: Partial<TenantTrustedDomainAttributes>) {
    super("OD3_TenantTrustedDomain", data as TenantTrustedDomainAttributes);
  }

  get host(): string {
    return super.get("host");
  }
  set host(value: string) {
    super.set("host", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_TenantTrustedDomain", TenantTrustedDomain);

