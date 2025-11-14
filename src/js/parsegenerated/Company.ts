import Parse from "parse";

import type { Contact } from "./Contact";
import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface CompanyAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: Parse.Relation<Company, Contact>;
  name?: string | undefined;
  sources: Parse.Relation<Company, Source>;
  tenant?: Tenant | undefined;
}

export class Company extends Parse.Object<CompanyAttributes> {
  static className: string = "OD3_Company";

  constructor(data?: Partial<CompanyAttributes>) {
    super("OD3_Company", data as CompanyAttributes);
  }

  get contacts(): Parse.Relation<Company, Contact> {
    return super.relation("contacts");
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get sources(): Parse.Relation<Company, Source> {
    return super.relation("sources");
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Company", Company);

