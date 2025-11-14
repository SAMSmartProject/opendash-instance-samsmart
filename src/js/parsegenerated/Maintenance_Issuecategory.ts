import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface Maintenance_IssuecategoryAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  catchall: boolean;
  enabled: boolean;
  icon?: string | undefined;
  issuecode?: string | undefined;
  name: string;
  parent?: Maintenance_Issuecategory | undefined;
  source: Parse.Relation<Maintenance_Issuecategory, Source>;
  tenant?: Tenant | undefined;
}

export class Maintenance_Issuecategory extends Parse.Object<Maintenance_IssuecategoryAttributes> {
  static className: string = "OD3_Maintenance_Issuecategory";

  constructor(data?: Partial<Maintenance_IssuecategoryAttributes>) {
    super("OD3_Maintenance_Issuecategory", data as Maintenance_IssuecategoryAttributes);
  }

  get catchall(): boolean {
    return super.get("catchall");
  }
  set catchall(value: boolean) {
    super.set("catchall", value);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get issuecode(): string | undefined {
    return super.get("issuecode");
  }
  set issuecode(value: string | undefined) {
    super.set("issuecode", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get parent(): Maintenance_Issuecategory | undefined {
    return super.get("parent");
  }
  set parent(value: Maintenance_Issuecategory | undefined) {
    super.set("parent", value);
  }

  get source(): Parse.Relation<Maintenance_Issuecategory, Source> {
    return super.relation("source");
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Issuecategory", Maintenance_Issuecategory);

